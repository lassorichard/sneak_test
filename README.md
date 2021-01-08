# Richard Lasso - Prueba Tita Media

> Sneak website

## Repository

1. Descargar repositorio:
>Encontrará una rama principal con sus respectivos commits, las ramas se trabajaron de manera local.

para main:
```bash
git clone https://github.com/lassorichard/sneak_test.git
```

### Installation

[Node.js](https://nodejs.org/) v12.17.0+ es requerido para iniciar el desarrollo.

Instalar Gulp.js
```bash
$ npm install --global gulp-cli
```

Instalar las dependencies/devDependencies e iniciar el servidor local.

```bash
$ cd sneak_test
$ npm i || npm install
$ npm start || gulp
```


## Información importante acerca del proyecto

1. Mobile First como base fundamental en el desarrollo del proyecto
2. Tags semánticos usados basados en los estándares de HTML5
3. Como preprocesador de estilos se usó SCSS, los diferentes componentes .scss están organizados dentro de app/scss
4. Uso de mixins:

```bash
$bp-mobile: 400px;
$bp-tablet: 768px;
$bp-desktop: 1024px;
$bp-huge: 1200px;
```
> Para los breakpoints, se usaron dentro de los componentes scss con el fin de usar diferentes anchos, acá uno ejemplo:

```bash
@inlude from(tablet) {
 //estilos correspondientes a la vista tablet
}
```

```bash
$base-font-size: 16px;
```
> Para las fuentes, se creó un mixin el cuál convierte a rem los tamaños de fuente:

```bash
@inlude font-size(20px)
rendered: font-size: 20px; and font-size: 1.25rem;
```

5. La metodología utilizada para el preprocesador sass fue BEM (Block, Element, Modifier)
6. Dentro del proyecto la utilizacion de CSS Flexbox fue crucial y tambien en pequeña proporción se utilizó CSS Gridbox.
7. Los items de la sección "home layout" fueron cargados por medio de un Json en la ubicacion app/products.json
8. La animación del menú fue desarrollada gracias a la integración de CSS y JS, haciendo posible un diseño fluido y al mismo tiempo bloqueando el scroll para poner en detalle el menú.
9. Se crearon las etiquetas para el posicionamiento de la pagina web en los buscadores

## Notas
Por limitación de tiempo hay algunas cosas que hubiera querido hacer:
1. Realizar el grid layout con un dinamismo en JS para que sea interactivo y poderlo controlar.
4. Hacer cross browsing en diferentes dispositivos y navegadores.
5. Implementar un lógica de lazy loading para las imagenes optimizando así tiempo de carga y peso.
6. Configurar tareas de Unit Testing.
7. Hacer pruebas en screen reader para la accesibilidad.


## Tech stack

HTML5

CSS3

SASS

ES6

JS


### Aprecio su tiempo leyendo este documento 
