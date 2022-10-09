import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { UsersModule } from '../users/users.module'
import { User } from '../users/schema/user.schema'
import { AuthModule } from './auth.module'
import { AuthService } from './auth.service'

describe('AuthService', () => {
    let service: AuthService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule, UsersModule],
        })
            .overrideProvider(getModelToken(User.name))
            .useValue(jest.fn())
            .compile()

        service = module.get<AuthService>(AuthService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
