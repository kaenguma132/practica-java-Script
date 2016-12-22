# Proyecto Lunar
Para esta practica he usado el ejemplo  que usted puso en el foro lo que en vez vez de dejarlo de la forma que lo puso yo lo he distribuido de una manera diferente en vez de llamarlo <b>.a .b.c.d y que ponga las proporciones yo lo he llamado <i>class=.bloque y class=land </i> </b>
ya que usan las mismas características para las 3 secciones y no hace falta distinguirla si fueran proporciones diferentes si que las distinguiría  y la 4 es distinta por ese motivo le he puesto una clase distinta a esta pagina la he llamado jugar


Para crear el panel e control y el game options he creado 3 id diferentes que las he llamado <b> panel-control, opciones-juego y nave </b>en en el cual he creado el contenido que se pedía en la practica,
en el panel-control he creado la <b>velocidad, nivel de fuel y altura</b> , en opciones-juego he colocado un menú desplegable vertical que te indica pausa ,reiniciar y salir 

En este caso se distinguen las partes de cada bloque por el contenido el cual esta metido dentro de un Div 

Para sacar las imágenes lo he hecho a través de goolge en la sección e imágenes y dando a la opción de mas herramientas y filtrarlo por licencia , para buscar la imagen de la nave espacial he escogido la 2 imagen de la siguiente web <i> [http://cosasdelfuturo.galeon.com/index2.html](http://cosasdelfuturo.galeon.com/index2.html)</i> la cual he retocado después para poder usarla en la practica solo he dejado la foto final y la del fondo de espacio la he buscado de la misma manera pero poniendo fondo espacial y de esta no encuentro su url, por eso no he podido sacar de donde la saque  y por ultimo la del suelo que la he sacado de <i>[https://www.google.es/search?hl=es&site=imghp&tbm=isch&source=hp&biw=1920&bih=974&q=fondo+espacio&oq=fondo+espacio&gs_l=img.3.0.0l10.1575.4350.0.6049.13.11.0.2.2.0.155.1081.5j5.10.0....0...1ac.1.64.img..1.12.1081.ghaVSf9OVyY#hl=es&tbs=sur:fc%2Cisz:m&tbm=isch&q=lunar&imgrc=UrRM3agy7GFbOM%3A](https://www.google.es/search?hl=es&site=imghp&tbm=isch&source=hp&biw=1920&bih=974&q=fondo+espacio&oq=fondo+espacio&gs_l=img.3.0.0l10.1575.4350.0.6049.13.11.0.2.2.0.155.1081.5j5.10.0....0...1ac.1.64.img..1.12.1081.ghaVSf9OVyY#hl=es&tbs=sur:fc%2Cisz:m&tbm=isch&q=lunar&imgrc=UrRM3agy7GFbOM%3A)</i>

Para el apartado de  <b>css</b> he  usado 2 estilos diferentes el primero es que afecte a todo lo que aparezca en pantalla y el segundo a sido especificando lo que tiene que ir afectando de una forma concreta a cada objeto  para eso he usado las id que he ido colocando en el codigo para que se muestre en la pagina de juego que he mencionado antes.

En el siguiente apartado he creado la pagina de indice llamada index el cual comparte el css usando el codigo <i>(link rel="stylesheet" type="text/css" href="css/lunarlanding.css") y el de link rel='stylesheet' media='screen and (max-width: 960px)' type="text/css" href='css/movil.css' para movil </i> en el apartado del <i>head</i>

Desde esta pagina se accede al juego y  a trabes de iniciar partida situado en el menú  horizontal se accede al juego y desde el juego con el botón de salir a la portada del juego,  también he añadido <b> Como jugar y acerca de </b> el las cueles he colocado un texto en el cual explico a como jugar y acerca de este juego

He creado otra carpeta que se llama font para hacer referencia a un estilo de letra que se ve de forma digital para los números del panel de control y he usado la font-family: Numeros_digitales, sans-serif;

También en la página de juego a la imagen de la nave le he dado una <b> id llamada imgnave </b> ya que esta tiene que cambiar entre el motor apagado y el motor encendido y cuando no cumple los requisitos para ganar la partida

He creado una carpeta que se llama js en la cual he colocad en el interior mi practica anterior y he creado un archivo llamado js.js que he usado para trasladar el archivo que nos ha proporcionado para poder hacer la práctica y en el cual he ido modificando las id para que se pueda mostrar lo mismo que se muestra en la página que nos ha pasado usted. 

En el<b> menú de opciones</b> he añadido que el botón de pause pare el juego el de reanudar lo continúe y el de reiniciar que vuelva a empezar desde el inicio y el de salir que vuelva a la pagina de índice  

<i>He añadido una ventana al inicio de parida para seleccionar la dificultada con la que se quiere jugar ya sea modo fácil o difícil o volvera la pagina de inicio</i>

También he añadido que cuando terminas la partida ya sea ganando o perdiendo te muestre un mensaje de felicidades o te la as pegado y esta imagen de la nave cambie a una explosión 