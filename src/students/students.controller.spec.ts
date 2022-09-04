import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { StudentsController } from './students.controller'
import { StudentsModule } from './students.module'
import { Students } from './schema/students.schema'

describe('StudentsController', () => {
    let controller: StudentsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [StudentsModule],
        })
            .overrideProvider(getModelToken(Students.name))
            .useValue(jest.fn())
            .compile()

        controller = module.get<StudentsController>(StudentsController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
