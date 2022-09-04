import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

export type StudentsDocument = Students & Document

@Schema()
export class Students {
    @Prop({unique: true})
        matricula: string
    @Prop()
        name: string
    @Prop()
        lastname: string
    @Prop({unique: true})
        email: string
    @Prop({select: false})
        password: string
    @Prop()
        group: Types.ObjectId
    @Prop()
        teacher: Types.ObjectId
}

export const StudentsSchema = SchemaFactory.createForClass(Students)

StudentsSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret.password
        delete ret._id
        delete ret.__v
    }
})