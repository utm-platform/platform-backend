import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../auth/jwt.guard'

@ApiTags('students')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    
    /*
    TODO Hacer correctamente la referencia al group
    */
    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto)
    }

    @Get()
    findAll() {
        return this.studentsService.findAll()
    }

    @Get(':matricula')
    findOne(@Param('matricula') matricula: string) {
        return this.studentsService.findOne(matricula)
    }
    // TODO No hace nada todavía
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto,
    ) {
        return this.studentsService.update(id, updateStudentDto)
    }

    @Delete(':matricula')
    remove(@Param('matricula') matricula: string) {
        return this.studentsService.remove(matricula)
    }
}
