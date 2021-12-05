const URL = self.location.href
let ruta=''
URL.startsWith('https:')?ruta='/PWA-EFG-U1-P1/':ruta="/"
self.addEventListener("install", event => {
    console.log("sw instalado")
});
self.addEventListener("activate", event =>{
    console.log("sw activado y controlando la app")
})
self.addEventListener('fetch', event => {
    if(event.request.url.includes('.jpg')){
        let response = fetch(`${ruta}img/felino.jpg`)
        console.log("imagen...")
        event.respondWith(response)
    }
    if(event.request.url.includes('style.css')){
        let response = new Response(`
        body{
            background-color:black !important;
            color: red;
        },`,{
            headers: {
                'Content-Type': 'text/css'
            }
        })
        event.respondWith(response)
    }
})