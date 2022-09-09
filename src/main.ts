import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle('English Platform API Documentation')
        .setDescription('The English Platform API description')
        .setVersion('1.0')
        .addTag('students')
        .addTag('groups')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)
    await app.listen(process.env.PORT || 5000)
}
bootstrap()
