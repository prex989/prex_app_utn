function mostrarhora() {
    let reloj=document.getElementById("reloj")
    let lahora=new Date();
    reloj.innerHTML=lahora.toLocaleTimeString();
}

let cronometro=setInterval(mostrarhora,1000)