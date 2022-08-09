// console.log(window);
//     console.log(document);
//     let texto = "¡Hola! felipe,cómo estas?,Te amo Felipe";


//     const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto)) ;  

//    //hablar(texto);

// console.log("*************Elementos del documento*************");


// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.scripts);
// console.log(document.getElementsByClassName("titulo"))


// setTimeout(() => {
// console.log(document.getSelection().toString());
// }, 5000);
// document.write("<h2>Hola Mundo! des de el Dom!</h2>");


// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"))
// console.log(document.getElementById("menu"));

// console.log(document.querySelector("h3"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll("a"))

// console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));

// console.log(document.querySelectorAll(".card")[2]);

// console.log(document.querySelectorAll("#menu li"));

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));

// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "es";
// console.log(document.documentElement.getAttribute("lang"));
// document.documentElement.setAttribute("lang", "es-ARG");
// console.log(document.documentElement.getAttribute("lang"));


// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target","_blank");
// $linkDOM.setAttribute("rel","noopener noreferrer");
// $linkDOM.setAttribute("href","https://www.youtube.com/");

// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// //Data Atributes

// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);

// $linkDOM.dataset.description = "Hola aqui estoy "

// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// $linkDOM.removeAttribute("data-id");
// console.log($linkDOM.hasAttribute("data-id"));


const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
/*Para usar propiedades CSS en js se ultilizar lowerCamelCase
.style
getAtribute
getConmputedStyle
*/
//Porpiedades dinamicas
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));


$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "10px";
$linkDOM.style.borderRadius = "5rem";

console.log($linkDOM.style);


//variables CSS -custom properties

const $html = document.documentElement;

$body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);


$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#221");
 
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);


