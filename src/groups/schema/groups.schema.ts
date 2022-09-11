import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

export type GroupDocument = Group & Document

@Schema()
export class Group {
    @Prop({ required: true })
        name: string
    @Prop({required: true})
        career: string
    @Prop()
        teacher: Types.ObjectId
}

export const GroupSchema = SchemaFactory.createForClass(Group)

GroupSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})