import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, Length } from 'class-validator'
import { Types } from 'mongoose'

export class CreateUserDto {
    @IsNotEmpty({message: 'La matrícula es requerida'})
    @ApiProperty({description: 'La ID del estudiante', example: '1930599'})
        matricula: string
    @IsNotEmpty({message: 'El nombre es requerido'})
    @Length(4, 20)
    @ApiProperty({description: 'Nombre del estudiante', example: 'Rafael'})
        name: string
    @IsNotEmpty({message: 'El apellido es requerido'})
    @ApiProperty({description: 'Apellido del estudiante', example: 'Sanchez Olguin'})
        lastname: string
    @IsNotEmpty({message: 'El correo es requerido'})
    @IsEmail()
    @ApiProperty({description: 'Correo institucional', example: '1930599@utmatamoros.edu.mx'})
        email: string
    @IsNotEmpty({message: 'La contraseña es requerida'})
    @ApiProperty({description: 'Contraseña', example: 'Passw@rd&0626'})
        password: string
    @IsEnum(['admin', 'student', 'teacher'], {message: 'El rol debe ser admin, student o teacher'})
    @IsOptional()
    @ApiProperty({description: 'Role', example: 'student'})
        role: string
    isActive?: boolean
    @IsOptional()
    @ApiProperty({description: 'ID del grupo', example: '5f9f9c0b9b9b9b9b9b9b9b9b'})
        group: Types.ObjectId
}
