let para = document.getElementsByTagName("p");

function randomNumber() {
    return Math.trunc(Math.random() * 100);
}

for (let x = 0; x < para.length; x++) {
    para[x].innerHTML = randomNumber().toString();
}
