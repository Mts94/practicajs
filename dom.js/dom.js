console.log(window);
    console.log(document);
    let texto = "¡Hola! felipe,cómo estas?,Te amo Felipe";


    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto)) ;  

   //hablar(texto);

console.log("*************Elementos del documento*************");


console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.scripts);

setTimeout(() => {
console.log(document.getSelection().toString());
}, 5000);
document.write("<h2>Hola Mundo! des de el Dom!</h2>");


