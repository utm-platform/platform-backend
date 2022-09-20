import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({description: 'Correo institucional', example: '1930599@utmatamoros.edu.mx'})
        email: string
    @IsNotEmpty()
    @ApiProperty({description: 'Contraseña', example: 'Passw@rd&0626'})
        password: string
}
