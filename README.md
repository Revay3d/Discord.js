## Bot de discord js 🤖
 Este codigo basico pero muy bien detallado y facil de usar es para los usuarios que quieren un bot propio o no saben hacer unbon como yo, este codigo es publico y pueden ayudar a que sea mas completo

>[!IMPORTANT]
>Este codigo tiene una licensia ``MIT``
    
 <p align="center">
  
<img src="https://img.shields.io/badge/version-1.0-green"/> 
<img src="https://img.shields.io/badge/author-RevayDev-blue"/> 
<img src="https://img.shields.io/badge/licencia-MIT-red"/> 
<img src="https://img.shields.io/badge/aria-Bot de discord.js-yellow"/>
  
</p>

## Instalacion
  1. Deberás clonar este repositorio. (Lo siguiente es hacerlo desde tu terminal de Git.)
   ```Bash
   git clone https://github.com/Revay3d/Discord.js.git
   ```
   ¿No tienes Git? https://git-scm.com/
  
  2. Descargar ``python``
   > Si tiene errores puedes descargar la vercion de python 3.10.0 o la 3.11.5
   En sistemas operativos basados en Debian y Ubuntu, puedes usar el siguiente comando para descargar e instalar Python:
 ```Bash
 sudo apt update
 sudo apt install python3
 ```
  En sistemas operativos basados en Fedora, puedes usar el siguiente comando para descargar e instalar Python:
  ```Bash
 sudo dnf install python3
 ```
 En sistemas operativos basados en Arch Linux, puedes usar el siguiente comando para descargar e instalar Python:
 ```Bash
 sudo pacman -S python
 ```
 Después de ejecutar el comando apropiado para tu sistema operativo, Python debería estar instalado en tu computadora. Puedes verificar que se haya instalado correctamente ejecutando el 
 comando ``python3 --version`` en la terminal. Esto debería mostrar la versión de Python que acabas de instalar.

 otro sistema operativo o mas informacion al sitio oficial de Python: 
 https://www.python.org/downloads/

## Personalización
⚠ Por favor, sigue los siguientes pasos para configurar el bot y evitar cualquier error. Los pasos estarán detallados minuciosamente para aquellas personas que puedan tener dificultades para entender o asimilar la información. 😊

>[!CAUTION]
>Si tienes slach commands debes crearlos o subirlos a discord para ello usa:
>```Bash
>npm run deply
>```

>[!TiP]
>Puedes usar el comando start para iniciar el bot.
>```Bash
>npm run start
>```

1. Coloca tu token
>[!TIP]
>Crea un archivo ``.env`` para tu token como el archivo de ejemplo de ``.env.example``
>```.env
>token=TU_TOKEN
>```


2. configurar el ``config``
   > Remplasa ``ID_BOT`` con el id de tu bot y ``ID_SERVER`` con el id del servidor donde esta el bot.
 ```json
{
    "prefix":"+",
    "clientId":"ID_BOT",
    "guildId":"ID_SERVER"
}
 ```
>[!NOTE]
>Debes activar la opcion de desarrollador para hacer el paso anterior.


3. Personaliza el codigo :)


 
