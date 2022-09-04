import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateStudentDto {
    @IsNotEmpty()
    @ApiProperty()
        matricula: string
    @IsNotEmpty()
    @Length(4, 20)
    @ApiProperty({description: 'Nombre del estudiante', example: 'John'})
        name: string
    @IsNotEmpty()
    @ApiProperty({description: 'Apellido del estudiante', example: 'Doe'})
        lastname: string
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({description: 'Correo institucional', example: '1930599@utmatamoros.edu.mx'})
        email: string
    @IsNotEmpty()
    @ApiProperty()
        password: string
    @ApiProperty()
        group: string
    @ApiProperty()
        teacher: string
}
