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