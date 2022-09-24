import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { StudentSchema } from '../students/schema/students.schema'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import 'dotenv/config'
import { JwtStrategy } from './jwt.strategy'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '7d' },
        }),
        
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
