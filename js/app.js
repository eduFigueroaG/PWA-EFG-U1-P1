if(navigator.serviceWorker){
    let url = ''
    const BASE_URL = window.location.href
    BASE_URL.startsWith('https:') ? url = '/PWA-EFG-U1-P1/sw.js' : url = "/sw.js"
    navigator.serviceWorker.register(url)
}else {
    console.log("no disponible")
}