function toggleMusic(){

let music = document.getElementById("musica");
let btn = document.querySelector(".music-btn");

if(music.paused){

music.play().catch(()=>{});
btn.style.animation = "spin 4s linear infinite";

}else{

music.pause();
btn.style.animation = "musicPulse 2s infinite";

}

}

const fechaEvento = new Date("Dec 20, 2026 17:00:00").getTime();

setInterval(function(){

const ahora = new Date().getTime();
const distancia = fechaEvento - ahora;

if(distancia < 0){

document.querySelector(".countdown").innerHTML = `
<h2 style="font-family:'Great Vibes'; font-size:40px;">
🎉 ¡HOY ES EL GRAN DÍA! 🎉
</h2>
<p style="margin-top:10px; font-size:18px;">
Gracias por acompañarme 💖
</p>
`;

return;
}

document.getElementById("dias").innerHTML =
Math.floor(distancia / (1000*60*60*24));

document.getElementById("horas").innerHTML =
Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutos").innerHTML =
Math.floor((distancia%(1000*60*60))/(1000*60));

document.getElementById("segundos").innerHTML =
Math.floor((distancia%(1000*60))/1000);

},1000);

/* animacion scroll */

const sections=document.querySelectorAll(".section");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
});

sections.forEach(sec=>{
observer.observe(sec);
});

const acc = document.querySelectorAll(".accordion");

acc.forEach(btn => {

btn.addEventListener("click", function(){

this.classList.toggle("active");

let panel = this.nextElementSibling;

if(panel.style.maxHeight){
panel.style.maxHeight = null;
}else{
panel.style.maxHeight = panel.scrollHeight + "px";
}

});

});

const timelineItems = document.querySelectorAll(".timeline-item");

const observerTimeline = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.3});

timelineItems.forEach(item=>{
observerTimeline.observe(item);
});

const timeline = document.querySelector(".timeline");

const lineObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
timeline.classList.add("show");
lineObserver.unobserve(entry.target);
}
});
});

lineObserver.observe(timeline);

function mostrarPopup(){
document.getElementById("confirmPopup").classList.add("show");
}

function irWhatsapp(){
    let mensaje = encodeURIComponent(
        "Hola, confirmo mi asistencia a los XV de Valeria 🎉"
    );

// Abrir WhatsApp en nueva pestaña
    window.open(
        "https://wa.me/5213341024243?text=" + mensaje,
        "_blank"
    );

    // Cerrar el popup
    cerrarPopup();
}

function cerrarPopup(){
document.getElementById("confirmPopup").classList.remove("show");
}
