import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Types } from 'mongoose'

export class CreateGroupDto {
    @IsNotEmpty()
    @ApiProperty()
        name: string
    @IsNotEmpty()
    @ApiProperty()
        career: string
    @IsNotEmpty()
    @ApiProperty()
        teacher: Types.ObjectId
}
