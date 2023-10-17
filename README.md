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
