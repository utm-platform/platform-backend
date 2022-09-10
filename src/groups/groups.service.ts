import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateGroupDto } from './dto/create-group.dto'
import { UpdateGroupDto } from './dto/update-group.dto'
import { Group, GroupDocument } from './schema/groups.schema'

@Injectable()
export class GroupsService {

    constructor(@InjectModel(Group.name) private groupsModel: Model<GroupDocument>) {}


    async create(createGroupDto: CreateGroupDto) {
        return await this.groupsModel.create(createGroupDto)
    }

    async findAll() {
        return await this.groupsModel.find({})
    }

    async findOne(id: string) {
        return await this.groupsModel.findById(id)
    }

    update(id: number, updateGroupDto: UpdateGroupDto) {
        return `This action updates a #${id} group`
    }

    async remove(id: string) {
        return await this.groupsModel.findByIdAndDelete(id)
    }
}
