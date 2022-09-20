import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

export type StudentDocument = Student & Document

@Schema()
export class Student {
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
    @Prop({default: true})
        isActive: boolean
    @Prop({required: true, type: Types.ObjectId, ref: 'Group'})
        group: {
            type: Types.ObjectId,
            ref: 'Group'
        }
}

export const StudentSchema = SchemaFactory.createForClass(Student)

StudentSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        delete ret._id
        delete ret.__v
        delete ret.isActive
    }
})