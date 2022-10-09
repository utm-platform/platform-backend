import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Types } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './schema/user.schema'
import { UsersModule } from './users.module'
import { UsersService } from './users.service'

describe('UsersService', () => {
    let service: UsersService
    
    const mockUsersService = {
        create: jest.fn((createUserDto: CreateUserDto) => {
            return {
                ...createUserDto
            }
        }),
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UsersModule],
        })
            .overrideProvider(getModelToken(User.name))
            .useValue(mockUsersService)
            .compile()

        service = module.get<UsersService>(UsersService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should create a user with encrypted password', async () => {
        const insertUser: CreateUserDto = {
            matricula: '123456',
            name: 'test_name',
            lastname: 'test_lastname',
            email: 'test@utmatamoros.edu.mx',
            password: 'pass123',
            group: new Types.ObjectId('631a813605a354b4a29166c3')
        }

        const result = await service.create(insertUser)

        expect(result).toEqual({...insertUser, password: expect.stringContaining('$2b$10$')})
    })
})
