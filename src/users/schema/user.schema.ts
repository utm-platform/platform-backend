import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

export enum UserRole { 
    ADMIN = 'admin',
    STUDENT = 'student',
    TEACHER = 'teacher'
}
@Schema()
export class User {
    @Prop({unique: true})
        matricula: string
    @Prop({required: true})
        name: string
    @Prop({required: true})
        lastname: string
    @Prop({unique: true})
        email: string
    @Prop({required: true})
        password: string
    @Prop({
        enum: ['admin', 'student', 'teacher'],
        default: 'student'
    })
        role: UserRole
    @Prop({default: true})
        isActive: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        delete ret.__v
        delete ret.isActive
    }
})