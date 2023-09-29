let rocket = document.getElementById("rocket");
let buttonLaunch = document.getElementById("firing-button");
let spanBillboard = document.getElementById("billboard").querySelector('span')
let cancel = document.getElementById("stop-firing-button");
let reset = document.getElementById("reset-firing-button");
let action = ""

for (let i = 1500; i >= 0; i--) {
    let star = document.createElement("div");
    star.classList.add("star");
    let size = Math.random() * 10;

    let random3 = Math.floor(Math.random() * 3);
    if (random3 == 0) {
        star.classList.add("tiny");
    } else if (random3 == 1) {
        star.classList.add("normal");
    } else {
        star.classList.add("big");
    }

    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var randomWidth = Math.floor(Math.random() * maxWidth);
    var randomHeight = Math.floor(Math.random() * maxHeight);
    star.style.top = randomHeight + "px";
    star.style.left = randomWidth + "px";
    document.body.appendChild(star);
}

const timeouts = [];

function startTimeout(callback, delay) {
    const timeoutId = setTimeout(callback, delay);
    timeouts.push(timeoutId);
}

function stopAllTimeouts() {
    for (const timeoutId of timeouts) {
        clearTimeout(timeoutId);
    }
    timeouts.length = 0;
}

buttonLaunch.addEventListener("click", function () {
    if (buttonLaunch.classList.contains('disabled')) return;
    rocket.setAttribute("src", "images/rocket2.gif");
    buttonLaunch.classList.add('disabled')
    buttonLaunch.setAttribute('disabled', true)
    cancel.classList.remove('disabled')
    cancel.setAttribute('disabled', false)

    for (let i = 10; i >= 0; i--) {
        startTimeout(function () {
            spanBillboard.innerHTML = i + "";
        }, (10 - i) * 1000);
    }

    startTimeout(function () {
        rocket.classList.add("tookOff")
        rocket.setAttribute("src", "images/rocket3.gif");
    }, 10000);
});

cancel.addEventListener("click", function () {
    if (cancel.classList.contains('disabled')) return;
    stopAllTimeouts();
    rocket.setAttribute("src", "./images/rocket1.png");
    cancel.setAttribute('disabled', false);
    cancel.classList.add('disabled');
    reset.classList.remove('disabled')
    reset.setAttribute('disabled', false)
});

reset.addEventListener("click", function () {
    if (reset.classList.contains('disabled')) return;
    buttonLaunch.classList.remove('disabled');
    buttonLaunch.removeAttribute('disabled');
    reset.setAttribute('disabled', false);
    reset.classList.add('disabled');
    spanBillboard.innerHTML = "10";
    rocket.classList.remove("tookOff");
}
);

