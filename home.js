let body = document.querySelector("body");
let mainphone = document.querySelector(".mainphone");

console.log(mainphone);
function phone(source){
    mainphone.src = source;
}
function Colors(coleur){
    body.style.backgroundColor = coleur;
}