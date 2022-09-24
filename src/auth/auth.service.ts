import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { compare } from 'bcrypt'
import { Model } from 'mongoose'
import { User, UserDocument } from '../users/schema/user.schema'
import { LoginDto } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private authModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto) {

        const user = await this.authModel.findOne({ email: loginDto.email })

        if (!user) throw new HttpException('Invalid email or password', HttpStatus.NOT_FOUND)

        const isMatch = await compare(loginDto.password, user.password)

        if (!isMatch) throw new HttpException('Invalid email or password', HttpStatus.NOT_FOUND)

        const token = this.jwtService.sign({ 
            matricula: user.matricula, 
            email: user.email, 
            name: user.name, 
            lastname: user.lastname
        })

        const data = {
            user,
            token
        }

        return data
    }
}
