let para = document.getElementsByTagName("p");

function randomNumber() {
    return Math.trunc(Math.random() * 100);
}

console.log(randomNumber());

for (let x = 0; x <= para.length; x++) {
    para[x].innerHTML = randomNumber();
}
