import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { StudentsDocument } from './schema/students.schema'
import { Model } from 'mongoose'

@Injectable()
export class StudentsService {

    constructor(@InjectModel('Students') private studentsModule: Model<StudentsDocument>) {}

    async create(createStudentDto: CreateStudentDto) {
        const studentCreated = this.studentsModule.create(createStudentDto)

        return studentCreated
    }

    async findAll() {
        return await this.studentsModule.find({})
    }

    async findOne(id: string) {
        return await this.studentsModule.findById(id)
    }

    update(id: string, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`
    }

    remove(id: string) {
        return `This action removes a #${id} student`
    }
}
