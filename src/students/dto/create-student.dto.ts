import { IsNotEmpty, Length } from 'class-validator'

export class CreateStudentDto {
    @IsNotEmpty()
        matricula: string
    @IsNotEmpty()
    @Length(4, 20)
        name: string
    @IsNotEmpty()
        email: string
    @IsNotEmpty()
        password: string
}
