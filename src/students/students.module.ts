import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { StudentsSchema } from './schema/students.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Students', schema: StudentsSchema }]),
    ],
    controllers: [StudentsController],
    providers: [StudentsService],
})
export class StudentsModule {}
