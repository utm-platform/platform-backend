import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import { Types } from 'mongoose'

export class CreateStudentDto {
    @IsNotEmpty()
    @ApiProperty()
        matricula: string
    @IsNotEmpty()
    @Length(4, 20)
    @ApiProperty({description: 'Nombre del estudiante', example: 'Rafael'})
        name: string
    @IsNotEmpty()
    @ApiProperty({description: 'Apellido del estudiante', example: 'Sanchez Olguin'})
        lastname: string
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({description: 'Correo institucional', example: '1930599@utmatamoros.edu.mx'})
        email: string
    @IsNotEmpty()
    @ApiProperty({description: 'Contraseña', example: 'Passw@rd&0626'})
        password: string
    @ApiProperty()
        isActive: boolean
    @IsNotEmpty()
    @ApiProperty()
        group: Types.ObjectId
}
