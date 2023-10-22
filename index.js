let dodger = document.getElementById('dodger');

const speed = 1;  // Change this value to manage the speed of the dodger

function moveDodgerLeft() {
    let leftPosition = parseInt(dodger.style.left, 10);

    if (leftPosition > 0){
        dodger.style.left = `${leftPosition - speed}px`;
    }
}

function moveDodgerRight() {
    let leftPosition = parseInt(dodger.style.left, 10);

    if (leftPosition < 360){
        dodger.style.left = `${leftPosition + speed}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
});
