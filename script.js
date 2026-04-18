const text = "Aspiring Software Developer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;