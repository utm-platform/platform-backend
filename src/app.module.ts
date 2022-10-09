import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module'
import { GroupsModule } from './groups/groups.module'
import { AuthModule } from './auth/auth.module'
import 'dotenv/config'

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        UsersModule,
        GroupsModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
