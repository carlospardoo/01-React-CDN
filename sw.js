//Nuestro Cache
const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
]; 

const CACHE_NAME = "v3_cache_contador_react";

/*Evento del sw */
//self = this;
/*Instalacion del service worker */
self.addEventListener("install", (e)=>{
    console.log(e);
    //Espera a que se ejecute lo de dentro
    //caches es del navegador y permite utilizar la memoria cache
    //addAll agrega a cache todas las rutas que yo quiera
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            cache.addAll(CACHE_ELEMENTS).then(()=>{
                self.skipWaiting();
            })
            .catch(console.log);
        })
    );
}); 

/*Activacion del service worker */
self.addEventListener("activate", (e)=>{
    const cacheWhiteList = [CACHE_NAME];
    //Metodo keys da las claves de los caches si hay varios
    e.waitUntil(
        caches.keys()
         .then(cachesNames => {
             //console.log(cachesNames);
             return Promise.all(cachesNames.map(cacheName =>{
                 cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName);
             }));
         })
         .then(() =>{self.clients.claim()})
    );
}); 

/*Fetch del service worker */
        //console.log(e.request);
self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request)
          .then((response)=>{
              if(response){
                 return response; 
              }
              return fetch(e.request);
          })        
    )
});
