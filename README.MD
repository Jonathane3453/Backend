# Creacion de servidor Backend en Node JS
Para crear el modulo para la consulta de datos, necesitamos hacer un BackEnd para poder usar la base de datos
En este caso lo creamos en una carpeta aparte para poder usarlo en futuros proyectos y hacerlo escalable
Para iniciar primero debemos iniciar el proyecto

```
npm init -y
```
Apartir de ahi es instalar las dependencias que necesitamos, asi que en la carpeta raiz del proyecto ejecuta los siguiente comandos en la terminal
```
npm i express dotenv mysql2 cors
```
con esto instalamos 3 dependencias, la primera es la de express que nos sirve para crear las APIs, la segunda es para usar los dotenv, la siguiente es para la conexion con mysql2 esta instalacion nos permite el nuevo protocolo de seguridad, y el cors nos va a permirtir conectarnos con el otro proyecto ya que permite conectarnos entre servidores

## Crear archivo dotenv
Copia los elementos dentro del archivo `.env.example` en un nuevo archivo que se llame `.env`.
<br>Pon el puerto de la base de datos en "**PORT**"<br>"**HOST**" debe ser el localhost o el que apunte a tu base de datos.<br> "**DATABASE**" es la base de datos de la que vas a extraer la informacion.<br> "**USER**" el usuario, de preferencia usa un usuario con privilegios de administrador.<br> "**PASSWORD**" es la contraseña del usuario. <br>"**WEBPORT**" es el puerto en el cual se va a desplegar el backend, comunmente se utiliza el 80
