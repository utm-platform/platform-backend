import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { User } from '../users/schema/user.schema'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthModule } from './auth.module'

describe('AuthController', () => {
    let controller: AuthController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule, UsersModule],
        })
            .overrideProvider(getModelToken(User.name))
            .useValue(jest.fn())
            .compile()

        controller = module.get<AuthController>(AuthController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
