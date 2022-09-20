import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Student } from '../students/schema/students.schema'
import { StudentsModule } from '../students/students.module'
import { AuthController } from './auth.controller'
import { AuthModule } from './auth.module'

describe('AuthController', () => {
    let controller: AuthController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule, StudentsModule],
        })
            .overrideProvider(getModelToken(Student.name))
            .useValue(jest.fn())
            .compile()

        controller = module.get<AuthController>(AuthController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
