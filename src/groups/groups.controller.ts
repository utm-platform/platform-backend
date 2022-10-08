import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { GroupsService } from './groups.service'
import { CreateGroupDto } from './dto/create-group.dto'
import { UpdateGroupDto } from './dto/update-group.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../auth/jwt.guard'

@ApiTags('groups')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @Post()
    create(@Body() createGroupDto: CreateGroupDto) {
        return this.groupsService.create(createGroupDto)
    }


    @Post(':groupId/students/:studentId')
    addStudent(@Param('groupId') groupId: string, @Param('studentId') studentId: string) {
        return this.groupsService.addStudent(groupId, studentId)
    }

    @Get()
    findAll() {
        return this.groupsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.groupsService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
        return this.groupsService.update(+id, updateGroupDto)
    }

    @Delete(':groupId/students/:studentId')
    removeStudentFromGroup(@Param('groupId') groupId: string, @Param('studentId') studentId: string) {
        return this.groupsService.removeStudent(groupId, studentId)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.groupsService.remove(id)
    }
}
