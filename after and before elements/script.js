let a = document.getElementById("heiglight")
console.log(a);

setInterval(() => {
    a.style.backgroundColor =  "red";
    a.style.backgroundColor =  "yello";
}, 2000);

function toggleBlink() {
    const blinkingText = document.getElementById('blinkingText');
    blinkingText.classList.toggle('blink');
}

  // Set up the interval to call the toggleBlink function every 1000 milliseconds (1 second)
setInterval(toggleBlink, 1000);