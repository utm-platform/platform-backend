# **Backend English Platform**

Esta es la parte del backend de la plataforma de inglés y francés para tomar exámenes de la Universidad Tecnológica de Matamoros.

## **Índice**

1. [Pre-requisitos](#pre-requisitos)
    1. [Instalación con Node](#node)
    2. [Instalación con Docker](#docker)
2. [Ejecutar el servidor](#servidor)
    1. [Variables de entorno](#variables)

## <h2 id='pre-requisitos'>**Pre-requisitos**</h2>

Se puede instalar de dos formas la plataforma. La primera es teniendo [Node@16](https://nodejs.org/es/) instalado previamente. La segunda es teniendo [Docker](https://www.docker.com/get-started/) instalado.

### <h3 id='node'>**Instalación con Node**</h3>

Para descargar la plataforma abre una línea de comandos y sigue los siguientes comandos:

```bash
git clone git@github.com:utm-platform/platform-backend.git # Descarga el repositorio
cd platform-backend# Entr a la carpeta del repositorio
npm install # o `yarn`
```

Hasta ahora ya hemos descargado el repositorio de la plataforma e instalado sus dependencias. Toca levantar el servidor, para ello existen diferentes formas dependiendo lo que quieras realizar.

### <h3 id='docker'>**Instalación con Docker**</h3>

Esta manera es mucho más sencilla, simplemente tienes que descargar la imagen en Docker Hub con el siguiente comando:

```bash
docker pull mrkrrot/backend-english-platform:latest
```

Cuando tengamos descargada la imagen ahora lo único que falta es crear un contenedor con dicha imagen, para ello usaremos el siguiente comando:

```bash
docker run -d --name english-backend -p 80:5000 mrkrrot/backend-english-platform:latest
```

Y ya tendrás desplegado en modo producción la plataforma en el puerto 80. Para visitar el servidor abre un navegador y navega en `localhost` y deberá cargar el servidor. La configuración usada es la siguiente:

| Parámetro | Descripción                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| -d        | Ejecuta el contenedor se ejecute en segundo plano.                                                                          |
| --name    | Agrega un nombre al contenedor (`english-backend`)                                                                          |
| -p        | `5000:5000` hace que el puerto `5000` del contenedor se libere al puerto `5000` de afuera, el cual podremos acceder a este. |

## <h2 id='servidor'>**Ejecutar el servidor**</h2>

### <h3 id='variables'>**Variables de entorno**</h3>

Antes de ejecutar el servidor se necesita configurar las variables de entorno en un archivo `.env`. Puedes utilizar el archivo `.env-example` para referencia de las variables a utilizar.

| Nombre    | Descripción                         |
| --------- | ----------------------------------- |
| MONGO_URI | Link de la base de datos en MongoDB |

### <h3 id='id6'>**Ejecutar**</h3>

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### **Test**

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
