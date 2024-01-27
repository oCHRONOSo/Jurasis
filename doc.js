
var parrafo = document.querySelector(".comment");
var jurasis_img = document.querySelector("img.jurasis");
var imgUnit1 = document.querySelector("img.img-unit1");

imgUnit1.addEventListener("mouseover", handleMouseOver);
imgUnit1.addEventListener("mouseout", handleMouseOut);

function handleMouseOver() {
    parrafo.style.display = "block";
    jurasis_img.style.width="100%";
    jurasis_img.style.height="100%";

}

function handleMouseOut() {
    parrafo.style.display = "none";
    jurasis_img.style.width="30%";
    jurasis_img.style.height="30%";
}
