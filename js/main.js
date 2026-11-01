window.addEventListener("DOMContentLoaded", function() 
{
    //1. array para el header con 8 imágenes
    const cabecera= [
    "image/banner/1.jpg",
    "image/banner/2.jpg",
    "image/banner/3.jpg",
    "image/banner/4.jpg",
    "image/banner/5.jpg",
    "image/banner/6.jpg",
    "image/banner/7.jpg",
    "image/banner/8.jpg",
    ];
    //2. array para la galeria con 7 imágenes y sus respectivas descripciones
    const galeria = [
    {
        imagen:"image/viajes/1.jpg",
        Titulo: "Descanso junto al mar",
        Descripcion: "Disfruta de las mejores playas tropicales y de aguas cristalinas",
        alt:"Playa paraíso",
        },

    {
        imagen:"image/viajes/2.jpg",
        Titulo: "Fantásticas vacaciones",
        Descripcion: "Descanso esclusivo en medio del oceano y la naturaleza",
        alt:"Bungalows sobre el mar" ,
    },
        
    { 
        imagen:"image/viajes/3.jpg",
        Titulo: "Ruta por el mundo",
        Descripcion: "Explora los destino más icónico y emblemáticos del planeta",
        alt:"todas las direcciones",
    },


    {
        imagen:"image/viajes/4.jpg",
        Titulo: "Jardin maravilloso",
        Descripcion: "Descruba la increíble historia y arquitetura de Sevilla",
        alt:"PLaza de España",
    },


    {
        imagen:"image/viajes/5.jpg",
        Titulo: "Famoso puente",
        Descripcion: "Conozca nuestras rutas por el interior",
        alt:"Puente",
    },

    {
        imagen:"image/viajes/6.jpg",
        Titulo: "Descubra las rutas por la costa",
        Descripcion: "Para amantes del mar",
        alt:"Paseo por la orla", 
    },

    {
        imagen:"image/viajes/7.jpg",
        Titulo: "Ruta del vino",
        Descripcion: "Visite las mejores bodegas",
        alt:"Pueblo",
    },
    ];

    //seleccionamos la etiqueta "header" usando query selector
    const elementoHeader=document.querySelector("header");

    //crear el elemento img en memoria
    const imgBanner=document.createElement("img");
    imgBanner.classList.add("imagen-header");

    //añadimos atributos src y alt conrespondentes
    const indiceAleatorio = Math.floor(Math.random() * cabecera.length);
    imgBanner.src=cabecera[indiceAleatorio];
    imgBanner.alt="Banner dinámico aleatorio de cabecera";

    //añadimos elemento completo creado al header
    elementoHeader.appendChild(imgBanner);

    //seleccionamos el contenedor de la galería usando querySelector
    const contenedorGaleria=document.querySelector(".flex-galeria");

    //recorremos cada parte del array utilizando función
    galeria.forEach(function(item){
    
        //crear elemento contenedor de la tarjeta ("article");
        const tarjeta=document.createElement("article");
        tarjeta.classList.add("tarjeta");

        //crear la imagen de la tarjeta de forma independiente
        const imgtarjeta=document.createElement("img");
        imgtarjeta.src=item.imagen;
        imgtarjeta.alt=item.alt;

        //crear el bloque contenedor para la información de texto (div)
        const divInfo=document.createElement("div");
        divInfo.classList.add("tarjeta-info");

        //crear el título (h3) y añadir su contenido de texto
        const h3Titulo= document.createElement("h3");
        h3Titulo.textContent=item.Titulo;

        //crear el párrafo (p) y añadir su contenido de texto
        const pDescripcion= document.createElement("p");
        pDescripcion.textContent=item.Descripcion;

        //unir los documento de texto dentro del div informativo
        /*aqui eligimos el "append" por ser mas actual, pero si queremos que se vea en todos los navegadores (como el internet explore) deberiamos sustituir por "appendChild"() que acepta solo un nodo por llamada*/
        divInfo.append(h3Titulo,pDescripcion);

        //unir la imagen y el div informativo dentro de la tarjeta (article)
        tarjeta.append(imgtarjeta, divInfo);

        //añadir la tarjeta completa al contenedor principal de la galería
        contenedorGaleria.appendChild(tarjeta);
        });
});












/* capturar los elementos del Don
   
    Eventos    
   /* funciones
        crearBanner
            crear elemento Imagen y almacenarlo en el 
                usar create element
            asignar atributos -alt src tittle 
                mirar y asignar atributos con set atribute y con lo que sea...
            añadi imagen al Dom
    
    /*funcion pintar galeria 
            crear una pieza de estas por cada elemento del array (forEach)
                crear elemento contenedor
                crear el div para meter img 
                crear elemento img con sus atributos (src,alt)
                crear titulo
                crear la descripcion
                meter img al div
                meter el titulo div en la descripcion
            
                a parte de la foto, meter todo en el contenedor
            
            añadir  al Dom en el div flexcontainer*/
  
/*Envocar funcion
*/




  