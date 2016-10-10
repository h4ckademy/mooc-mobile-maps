# Módulo 3. Geolocalización
La geolocalización es un servicio muy útil para los dispositivos móviles, ya que podemos ofrecer al usuario servicios personalizados a su localización. Esta localización se calcula por varios métodos: desde un componente hardware específico, el GPS, hasta la triangulación de antenas móviles o la posición de puntos de acceso WiFi. De esta forma, conseguimos una localización muy precisa del usuario, y podemos ofrecerle desde restaurantes cercanos hasta videojuegos basados en localización.

Vamos a desarrollar una aplicación que nos permita pintar nuestra localización en un mapa usando marcadores. Y agregar otros marcadores en posiciones cercanas a nosotros.

## Geolocalización
En esta primera parte vamos a realizar una aplicación simple que solicita nuestra localización al terminal y pinta el restulado numérico en pantalla.

Para empezar, partimos de la plantilla que venimos usando que tiene preparado un esqueleto de la aplicación en HTML / CSS, y las librerías básicas cargadas: zepto, fastclick y hammer.

Vamos a pintar en pantalla las coordenadas (latitud, longitud) donde se encuentra el usuario.

En el HTML creamos un div para pintar la latitud y longitud de nuestra posición actual. Y le damos algo de estilo con CSS.

En el JavaScript necesitamos escuchar el evento *deviceready* para poder iniciar la petición de geolocalización y que el dispositivo esté preparado.

Para ello usamos el método *getCurrentPosition* que recibe como parámetros las funciones a ejecutar si la posición se obtuvo con éxito, o si no fue así.

En la función de éxito nos llega como parámetros un objeto position con muchas información. Así, pintaremos en la pantalla un mensaje con las coordenadas que encontramos en *position.coords*.

## Mapas con leaflet
Ahora vamos a hacer uso de mapas para mostrar la información de localización. Para usamos la librería *Leaflet* que nos facilita el pintado de mapas en nuestra app.

Para esto, además, necesitaremos un proveedor de tiles (pequeñas imágenes usadas para dibujar un mapa). Leaflet nos sugiere el uso de *mapbox* como proveedor de tiles. Así que nos creamos una cuenta en *mapbox*, y accedemos a la nuestra información para consultar nuestro token de acceso, una cadena de caracteres que identifica nuestros accesos a tu servicio.

Importamos la librería JS de *Leaflet*, el CSS y las imágenes en la carpeta css.

Con el token de mapbox ya podemos pintar el mapa centrado en una localización concreta. Usaremos la latitud y longitud calculada en el apartado anterior con  *getcurrentPosition* para centrar el mapa en esa posición.

## Marcadores en un mapa
Vamos a añadir una última funcionalidad a la app: la colocación de marcadores y popups con un texto. Así podremos indicar nuestras localizaciones favoritas en el mapa.

En nuestro mapa vamos a crear marcadores con la función marker con la posición de dónde queremos ponerlo. Y añadirles un texto en un pop-up, usando la función de bindPopUp sobre el marcador.

Lo usamos para poner un marcador y un popup con “estoy aquí” en nuestra posición.

Finalmente, para poder crear marcadores sobre una posición concreta del mapa vamos a detectar los eventos click (que aquí son tap). Al detectar un *tap* sobre el mapa pintamos un marcador en esa posición. Además, añadimos un texto al popup con la información de latitud y longitud del punto seleccionado.

### Enlaces
- [Página web de Leaflet](http://leafletjs.com/)
- [Documentación del plugin de geolocalización](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/)
- [Creación de un mapa con Leaflet así como la creación de marcadores, popups y escucha de eventos click](http://leafletjs.com/examples/quick-start/)
