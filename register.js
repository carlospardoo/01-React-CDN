
//navigator.serviceWorker
if('serviceWorker' in navigator){
    //console.log('Si existe');
    navigator.serviceWorker.register('./sw.js');//service worker
}
