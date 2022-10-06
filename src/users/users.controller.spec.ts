import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersModule } from './users.module'
import { User } from './schema/user.schema'
import { CreateUserDto } from './dto/create-user.dto'

describe('UsersController', () => {
    let controller: UsersController

    const mockUsersService = {
        find: jest.fn(() => {
            return [
                {
                    matricula: '123456',
                    name: 'test_name',
                    lastname: 'test_lastname',
                    email: 'test@hotmail.com',
                }
            ]
        }),
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UsersModule],
        })
            .overrideProvider(getModelToken(User.name))
            .useValue(mockUsersService)
            .compile()

        controller = module.get<UsersController>(UsersController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should return an array of users', async () => {
        const result = await controller.findAll()
        expect(result).toEqual([])

    })
})
