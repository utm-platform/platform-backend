import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { Students, StudentsDocument } from './schema/students.schema'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
@Injectable()
export class StudentsService {

    constructor(@InjectModel(Students.name) private studentsModel: Model<StudentsDocument>) {}

    async create(createStudentDto: CreateStudentDto) {
        
        const hash = await bcrypt.hash(createStudentDto.password, 10)
        createStudentDto.password = hash
        
        return await this.studentsModel.create(createStudentDto)
    }

    async findAll() {
        return await this.studentsModel.find({})
    }

    async findOne(id: string) {
        return await this.studentsModel.findById(id)
    }

    update(id: string, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`
    }

    remove(id: string) {
        return `This action removes a #${id} student`
    }
}
