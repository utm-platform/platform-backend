import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { GroupsModule } from './groups.module'
import { GroupsService } from './groups.service'
import { Group } from './schema/groups.schema'

describe('GroupsService', () => {
    let service: GroupsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GroupsModule],
        })
            .overrideProvider(getModelToken(Group.name))
            .useValue(jest.fn())
            .compile()

        service = module.get<GroupsService>(GroupsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
