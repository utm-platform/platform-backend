import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { StudentsModule } from '../students/students.module'
import { Student } from '../students/schema/students.schema'
import { AuthModule } from './auth.module'
import { AuthService } from './auth.service'

describe('AuthService', () => {
    let service: AuthService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule, StudentsModule],
        })
            .overrideProvider(getModelToken(Student.name))
            .useValue(jest.fn())
            .compile()

        service = module.get<AuthService>(AuthService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
