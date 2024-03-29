import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument, UserRole } from './schema/user.schema'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private usersModel: Model<UserDocument>) {}

    async createUser(createUserDto: CreateUserDto) {
        
        const hash = await bcrypt.hash(createUserDto.password, 10)
        createUserDto.password = hash
        
        return await this.usersModel.create(createUserDto)
    }

    async findAllUsers() {
        return await this.usersModel.find({isActive: true})
    }

    async findAllWithRole(role: UserRole) {
        return await this.usersModel.find({isActive: true, role})
    }

    async findUserByMatricula(matricula: string) {
        return await this.usersModel.find({matricula, isActive: true})
    }

    // TODO No hace nada todavía
    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(matricula: string) {
        return this.usersModel.findOneAndUpdate({matricula}, {isActive: false})
    }
}
