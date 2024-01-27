
var parrafo = document.querySelector(".comment");
var jurasis_img = document.querySelector("img.jurasis");

jurasis_img.addEventListener("mouseover", handleMouseOver);
jurasis_img.addEventListener("mouseout", handleMouseOut);


function handleMouseOver() {
  parrafo.style.display = "flex";
  jurasis_img.style.transform = "scale(1.1)";
}

function handleMouseOut() {
  parrafo.style.display = "none";
  jurasis_img.style.transform = "scale(1)";
}

function hoverImage(element, newImageUrl) {
  element.src = newImageUrl;
}

function unhoverImage(element, originalImageUrl) {
  element.src = originalImageUrl;
}




// Funciones para el map del grafico PESTEL7

//onclick=politicos("Img/Macroentorno_img/P_click1.jpeg")

const PESTELimg = document.getElementById("PESTEL");

function politicos() {
  PESTELimg.src = "Img/Macroentorno_img/P_click1.jpeg";
  PESTELimg.removeEventListener("click", politicos);
  PESTELimg.addEventListener("click", politicos2);
  PESTELimg.removeAttribute("usemap");
}

function politicos2() {
  PESTELimg.src = "Img/Macroentorno_img/P_click2.png";
  PESTELimg.removeEventListener("click", politicos2);
  PESTELimg.addEventListener("click", politicos3);
}

function politicos3() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click", politicos3);
  PESTELimg.addEventListener("click", politicos);
  PESTELimg.setAttribute("usemap","#map");
}

//PESTELimg.addEventListener("click", politicos);


function economias() {
  PESTELimg.src = "Img/Macroentorno_img/E1_click1.png";
  PESTELimg.removeEventListener("click", economias);
  PESTELimg.addEventListener("click", economias2);
  PESTELimg.removeAttribute("usemap");
}

function economias2() {
  PESTELimg.src = "Img/Macroentorno_img/E1_click2.png";
  PESTELimg.removeEventListener("click", economias2);
  PESTELimg.addEventListener("click", economias3);
}

function economias3() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click", economias3);
  PESTELimg.addEventListener("click", economias);
  PESTELimg.setAttribute("usemap","#map");
}


function sociocultural() {
  PESTELimg.src = "Img/Macroentorno_img/S_click1.png";
  PESTELimg.removeEventListener("click", sociocultural);
  PESTELimg.addEventListener("click", sociocultural2);
  PESTELimg.removeAttribute("usemap");
}

function sociocultural2() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click", sociocultural2);
  PESTELimg.addEventListener("click", sociocultural);
  PESTELimg.setAttribute("usemap","#map");
}


function tecnologicos() {
  PESTELimg.src = "Img/Macroentorno_img/T_click1.png";
  PESTELimg.removeEventListener("click",tecnologicos);
  PESTELimg.addEventListener("click",tecnologicos2);
  PESTELimg.removeAttribute("usemap");
}

function tecnologicos2() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click",tecnologicos2);
  PESTELimg.addEventListener("click",tecnologicos);
  PESTELimg.setAttribute("usemap","#map");
}

function ecologicos() {
  PESTELimg.src = "Img/Macroentorno_img/E2_click1.png";
  PESTELimg.removeEventListener("click",ecologicos);
  PESTELimg.addEventListener("click",ecologicos2);
  PESTELimg.removeAttribute("usemap");
}

function ecologicos2() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click",ecologicos2);
  PESTELimg.addEventListener("click",ecologicos);
  PESTELimg.setAttribute("usemap","#map");
}


function legal() {
  PESTELimg.src = "Img/Macroentorno_img/L_click1.png";
  PESTELimg.removeEventListener("click",legal);
  PESTELimg.addEventListener("click",legal2);
  PESTELimg.removeAttribute("usemap");
}

function legal2() {
  PESTELimg.src = "Img/Macroentorno_img/gráfico_pestel.png";
  PESTELimg.removeEventListener("click",legal2);
  PESTELimg.addEventListener("click",legal);
  PESTELimg.setAttribute("usemap","#map");
}