import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import { Types } from 'mongoose'

export class CreateStudentDto {
    @IsNotEmpty()
    @ApiProperty({description: 'La ID del estudiante', example: '1930599'})
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
    isActive: boolean
    @IsNotEmpty()
    @ApiProperty({description: 'ID del grupo', example: '5f9f9c0b9b9b9b9b9b9b9b9b'})
        group: Types.ObjectId
}
