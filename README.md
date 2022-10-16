# STORE

_Este proyecto se basaba en dos partes, la primera consistía en generar una REST API, para esto se utilizo NodeJS - Express(por su gran facilidad para contruir APIs), Mysql (base de datos donde estaba alojada la información) y Heroku para el despliegue, se utilizaron consultas SQL y no el ORM para la manipulación de la BD, por problemas internos, la arquitectura de la API es una arquitectura por capas, es decir, cada parte de la API respondía por una cosa en particular, por ejemplo, los modelos eran los encargados de comunicarse con la base de datos, los controladores se comunicaban con los modelos pero no con la base de datos, y la segunda parte consistía en consumir la API desde el Frontend para visualizar ya no la información en un JSON sino los elementos, para esto se utilizo vanilla(como fue indicado)_

## Comenzando 🚀

_Dirigirse al link denominado "Frontend" para visualizar la tienda y los respectivos productos, en caso de querer visualizar el back, dirigirse al link denominado "Backend"_

[Frontend](https://github.com/jimalaros/SEGUNDOPROYECTO)

[Backend](https://back-store-jimmy-arango.herokuapp.com/products)

## Ejecutando las pruebas ⚙️

_Una vez dentro de la tienda podrás visualizar todos los productos separados por categoría, podrás construir el carrito de compras y visualizar el mismo en el local storage_

### Accediendo al Local Storage

1. _Sin salirse de la página web, presiona el siguiente comando para acceder a las herramientas de los desarrolladores (DevTools)_

```
CTRL + SHIFT + i
```

2. _En la parte superior de las DevTools encontrarás pestañas como, "elements" (HTML de la web), "console" (donde se muestran mensajes en caso tal de que así haya sido programado), otra serie de pestañas que no necesitamos y unas flechas que nos indican mas pestañas alojadas, en este menu (clic en las flechas) encontrarás algo llamado "Application", en la columna lateral de esta pestaña encontrarás "storage" y dentro encontrás el Local Storage_

### Back End

_En el link del Back encontrarás todos los productos y si escribes /id, se mostrará un solo producto, el correspondiente a su identificador (id)_

[Backend](https://back-store-jimmy-arango.herokuapp.com/products/21)

_Si se digita un id que no existe, no se mostrará nada_

## Construido con 🛠️

* [NodeJS](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/products/workbench/)
* [Express](https://expressjs.com/es/) 
* [Heroku](https://www.heroku.com/)
* [Github](https://github.com/)

## Autor ✒️

* **Jimmy Arango Ossa** - [Jimmy Arango Ossa](https://www.linkedin.com/in/jimmy-arango-ossa)

⌨️ con ❤️ [Jimmy Arango Ossa](https://github.com/jimalaros) 😊
