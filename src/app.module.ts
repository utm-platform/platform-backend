import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from './students/students.module'
import 'dotenv/config'

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        StudentsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
