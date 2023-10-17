# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Bootstrap

Para instalar bootstrap podemos usar dos formas:

1. Usando el CDN, que debemos agregar en el archivo index.html para conseguir este cdn debemos ingresar el la pagina de bootstrap y ahi conseguimos el cdn.

2. Instalando bootstrap dentro del proyecto, para esto debemos ejecutar el siguiente comando en la terminal ubicados dentro de la carpeta del proyecto:

    `npm i bootstrap@<VERSION> @popperjs/core`

    Esto instalara las dependencias de bootstrap y de popperjs.

    Luego dentro de nuestro archivo main.jsx o app.jsx debemos importar el modulo de bootstrap. Para importar el js de bootstrap colocamos la siguiente linea:

    `import "bootstrap";`

    Para el css de bootstrap agregamos la siguiente linea al jsx principal:

    `import "bootstrap/dist/css/bootstrap.css";`

Listo de esta forma tenemos agregado bootstrap en nuestro proyecto y solo resta usar las classnames correspondiente para aplicar los estilos.

## Github

Para subir nuestro proyecto a github y verlo en github pages debemos primeramente crear nuestro repositorio en github. Luego usando la terminal nos ubicamos dentro de la carpeta de nuestro proyecto:

`cd` <*nuestro proyecto*>

Luego, escribimos el siguiente comando:

`git init`

Luego de inicializar nuestro git, escribimos el siguiente comando para agregar los archivos del proyecto:

`git add .`

Si escribimos el siguiente comando podremos ver los archivos que serán agregado al repositorio:

`git status`

A continuación escribimos el siguiente comando:

`git commit -m '`*mensaje-del-commit*`'`

Si nos aparece el error de identidad de autor desconocida, debemos configurar nuestro git, para ello escribimos las siguientes lineas de comandos:

`git config --global user.mail "your@email.com"`

`git config --global user.name "userName"`

Luego de configurar nuestro git, volvemos a ejecutar nuestro git commit y esta vez no tendremos errores. Una vez termine el proceso del git commit, debemos escribir la siguiente linea de comando:

`git branch -M master`

Con este comando creamos la rama principal master. Luego ejecutamos el siguiente comando para que git conozca donde va a subir los archivos:

`git remote add origin http://url-que-da-github.com`

Para comprobar las direcciones donde va a ser subido tecleamos el siguiente comando:

`git remote -v`

Por ultimo, escribimos el siguiente comando para subir los archivos al repositorio indicándole que rama deseamos subir:

`git push origin <nombre-rama>`

En este caso quedaría el anterior código de la siguiente forma:

`git push origin master`

## Github Pages

Para facilitar el proceso de uso de github pages vamos hacer uso del modulo gh pages. Para poder instalar este modulo  debemos escribir el siguiente comando dentro de la capeta del proyecto:

`npm i gh-pages`

Una vez instalado, debemos proceder a configurar. Como estamos desplegando en un repositorio usamos `https://<NOMBRE DE USUARIO>.github.io/<REPO>/`

Asi que es necesario configurar `base` a `'/<REPO>/'` para eso vamos al archivo vite.config.js y luego de la sección que dice `plugins: [react()]` agregamos una coma y escribimos la siguiente linea:

`base: "/nombre-repo/",`

Luego vamos a la configuración de GitHub Pages en la página de configuración del repositorio y elige la fuente de implementación como "Acciones de GitHub", esto te llevará a crear un flujo de trabajo que compila e implementa el proyecto. Para obtener el código de este workflow podemos ir al siguiente link:

<https://es.vitejs.dev/guide/static-deploy.html#github-pages>

A continuación hacemos un git add y luego un git commit. Luego ejecutamos hacemos el build, para ello ejecutamos la siguiente linea:

`npm run build`

Luego ejecutamos la siguiente linea de comando:

`npx gh-pages -d dist`

Para que sea mas fácil y futuros cambios podemos agregar parte de esta linea al package.json en la sección que dice scripts de la siguiente forma:

`"deploy": "gh-pages -d build"`

Recuerda que es necesario agregar la coma después de la cada linea para que no haya ningún error.

Si agregamos esa linea al package.json debemos solo ejecutar el siguiente comando:

`npm run deploy`

Si todo ha salido bien, tendremos un mensaje diciéndonos que nuestro sitio ha sido publicado, y si nos vamos a la sección de pages de nuestro repositorio tendremos la url del proyecto.
