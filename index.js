


//hay que animar el logo css o anime.js

//habilitar el modo coctel guardando en localstorage los links clickeados



anime({
  targets: ".back",
  translateX: [
    // va hacia la derecha 200% lo que mida la imagen en 3s
    { value: '100%', duration: 3000, easing: 'linear' },
    // se teletransporta a la izquierda
    { value: '-100%', duration: 0 },
    // vuelve a donde empezo
    { value: 0, duration: 2000, easing: 'linear' }
  ],
  loop: true
});

// var linktrabajo1 = document.getElementById("linktrabajo1")
var linktrabajo2 = document.getElementById("linktrabajo2")
var linktrabajo3 = document.getElementById("linktrabajo3")
var linktrabajo4 = document.getElementById("linktrabajo4")
var linktrabajo5 = document.getElementById("linktrabajo5")
var coctel = document.getElementById("coctel")
var candado = document.getElementById("candado")

var paginas = [1,0,0,0,0]

if (localStorage.getItem("paginas") == null) {
  paginas = [1,0,0,0,0]
  
}else{
  paginas = JSON.parse(localStorage.getItem("paginas"))
}
// if (paginas[0] == 1) {
//   linktrabajo1.style.color = "#2a6cd5"
//   // alert("andaaa")
// }
if (paginas[1] == 1) {
  linktrabajo2.style.color = "#2a6cd5"
  // alert("andaaa")
}
if (paginas[2] == 1) {
  linktrabajo3.style.color = "#2a6cd5"
  // alert("andaaa")
}
if (paginas[3] == 1) {
  linktrabajo4.style.color = "#2a6cd5"
  // alert("andaaa")
}
if (paginas[4] == 1) {
  linktrabajo5.style.color = "#2a6cd5"
  // alert("andaaa")
}


if (paginas[0] == 1 &&  paginas[1] == 1 &&  paginas[2] == 1 && paginas[3] == 1 && paginas[4] == 1  ) {
  candado.hidden = true
  coctel.href = "https://www.youtube.com/watch?v=st35eH2VOwc"
}


function guardar(number) {
  //si yo visito una pagina cambio el array
  paginas[number] = 1
  // alert(paginas)
  //lo guardo
  localStorage.setItem("paginas", JSON.stringify(paginas));
  
  //al inicio si todas fueron visitadas cambio el modo coctel href
}
