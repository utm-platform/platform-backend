import { Module } from '@nestjs/common'
import { GroupsService } from './groups.service'
import { GroupsController } from './groups.controller'
import { GroupSchema } from './schema/groups.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from '../auth/auth.module'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
        AuthModule
    ],
    controllers: [GroupsController],
    providers: [GroupsService]
})
export class GroupsModule {}
