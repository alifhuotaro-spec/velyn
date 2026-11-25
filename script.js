const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const button = document.getElementById("button");
const pertanyaan = document.getElementById("pertanyaan");
const pelengkap = document.getElementById("pelengkap");
const hasil = document.getElementById("hasil");
const backgroundmenu = document.getElementById("backgroundmenu");
const img = document.getElementById("img");


btn1.addEventListener("click",function() {
  setTimeout(()=>{
  foto.src = "none"
  hasil.innerHTML = "mau ga jadi pacar gua";
  btn1.style.display = "none";
  pertanyaan.style.display = "none";
  pelengkap.style.display = "none";
  btn2.style.display = "block";
  btn3.style.display = "block";  
  
  }, 500)
});

btn5.addEventListener("click",function() {
  if (backgroundmenu.style.display 
      === "none" ||
      backgroundmenu.style.display === ""
     ) {
    backgroundmenu.style.display = "flex";
     } else {
    backgroundmenu.style.display = 
      "none"
     }
  });

btn4.addEventListener("click",function() {
  document.body.classList.toggle("dark");
 });

btn2.addEventListener("click",function() {
  setTimeout(()=>{
  hasil2.innerHTML = "YEAY AYO PACARAN";
  btn1.style.display = "none";
  pertanyaan.style.display = "none";
  pelengkap.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";  
  hasil.style.display="none";
  }, 500)
});

btn3.addEventListener("click",function() {
  setTimeout(()=>{
  hasil.innerHTML = "lupa gw tambahin coding buat nolak";
  }, 500)
});