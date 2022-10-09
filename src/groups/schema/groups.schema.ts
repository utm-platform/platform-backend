import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, SchemaTypes, Types } from 'mongoose'
import { User } from '../../users/schema/user.schema'

export type GroupDocument = Group & Document

@Schema()
export class Group {
    @Prop({ required: true })
        name: string
    @Prop({required: true})
        career: string
    @Prop({required: true, type: SchemaTypes.ObjectId, ref: User.name})
        teacher: Types.ObjectId
    @Prop({ type: [SchemaTypes.ObjectId], ref: User.name})
        students: Types.ObjectId[]
}

export const GroupSchema = SchemaFactory.createForClass(Group)

GroupSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})