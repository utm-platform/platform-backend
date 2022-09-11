import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { GroupsController } from './groups.controller'
import { GroupsModule } from './groups.module'
import { Group } from './schema/groups.schema'

describe('GroupsController', () => {
    let controller: GroupsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GroupsModule],
        })
            .overrideProvider(getModelToken(Group.name))
            .useValue(jest.fn())
            .compile()

        controller = module.get<GroupsController>(GroupsController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
