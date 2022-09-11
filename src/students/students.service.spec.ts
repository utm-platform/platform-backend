import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Student } from './schema/students.schema'
import { StudentsModule } from './students.module'
import { StudentsService } from './students.service'

describe('StudentsService', () => {
    let service: StudentsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [StudentsModule],
        })
            .overrideProvider(getModelToken(Student.name))
            .useValue(jest.fn())
            .compile()

        service = module.get<StudentsService>(StudentsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
