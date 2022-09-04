import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Students } from './schema/students.schema'
import { StudentsModule } from './students.module'
import { StudentsService } from './students.service'

describe('StudentsService', () => {
    let service: StudentsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [StudentsModule],
        })
            .overrideProvider(getModelToken(Students.name))
            .useValue(jest.fn())
            .compile()

        service = module.get<StudentsService>(StudentsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
