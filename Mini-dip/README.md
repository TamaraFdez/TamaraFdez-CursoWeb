## INSTALACIÓN

tener instalado nodejs y npm (LTS) https://nodejs.org

````
npm install```

 iniciar nuevo:
````

npm init

```
 instalación sin descargar este archivo
```

npm install gulp gulp-sass sass --save-dev

```
añadir scrip a package.json "gulp": "gulp"
```

arrancarlo:

```
npm run gulp
```

Para eliminar el css que no se utilice, usar

````
npm install gulp-purgecss```
despues de añade en la function:
````

.pipe(purgecss({content:['dist/html']}))```

Para comprimir, se añade en la funcion antes de .on

```
outputStyle:'compressed'
```
