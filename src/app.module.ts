import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from './students/students.module'
import { GroupsModule } from './groups/groups.module'
import { AuthModule } from './auth/auth.module'
import 'dotenv/config'

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        StudentsModule,
        GroupsModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
