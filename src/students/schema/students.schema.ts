import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type StudentsDocument = Students & Document

@Schema()
export class Students {
    @Prop()
        matricula: string
    @Prop()
        name: string
    @Prop()
        email: string
    @Prop()
        password: string
}

export const StudentsSchema = SchemaFactory.createForClass(Students)