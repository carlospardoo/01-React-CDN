//Nuestro Cache
const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
]; 

const CACHE_NAME = "v1_cache_contador_react";

/*Evento del sw */
//self = this;
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
