import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('students')
@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    
    // TODO Por verse qué hay que mejorar
    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto)
    }
    // TODO Implementar autenticación
    @Get()
    findAll() {
        return this.studentsService.findAll()
    }
    // TODO Implementar autenticación
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id)
    }
    // TODO No hace nada todavía
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto,
    ) {
        return this.studentsService.update(id, updateStudentDto)
    }
    // TODO No hace nada todavía
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(id)
    }
}
