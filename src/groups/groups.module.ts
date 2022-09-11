import { Module } from '@nestjs/common'
import { GroupsService } from './groups.service'
import { GroupsController } from './groups.controller'
import { GroupSchema } from './schema/groups.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
    ],
    controllers: [GroupsController],
    providers: [GroupsService]
})
export class GroupsModule {}
