import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    HttpStatus,
    HttpCode,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../auth/jwt.guard'
import { UserRole } from './schema/user.schema'

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    // TODO Hacer correctamente la referencia al group
    @ApiResponse({ status: HttpStatus.CREATED, description: 'El usuario ha sido creado correctamente.' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'No autorizado. Requiere autenticación.' })
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @ApiResponse({ status: HttpStatus.OK, description: 'Se han recuperado todos los usuarios correctamente.' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'No autorizado. Requiere autenticación.' })
    @Get()
    findAllUsers() {
        return this.usersService.findAllUsers()
    }
    
    @Get('/role/:role')
    findAllWithRole(@Param('role') userRole: UserRole) {
        return this.usersService.findAllWithRole(userRole)
    }

    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'No autorizado. Requiere autenticación.' })
    @Get(':matricula')
    findUser(@Param('matricula') matricula: string) {
        return this.usersService.findUserByMatricula(matricula)
    }

    // TODO No hace nada todavía
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return this.usersService.update(id, updateUserDto)
    }

    @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Se eliminó al usuario correctamente' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'No autorizado. Requiere autenticación.' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':matricula')
    remove(@Param('matricula') matricula: string) {
        return this.usersService.remove(matricula)
    }
}
