let dodger = document.getElementById("dodger");

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10)

    if (right < 360) {
        dodger.style.left = `${right + 10}px`;
    };
};

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -10}px`;
    };
};

function moveDodgerUp() {
    let topNumbers = dodger.style.bottom.replace("px", "");
    let up = parseInt(topNumbers, 10);

    if (up >= 0) {
        dodger.style.bottom = `${up +10}px`;
    };
};

function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let down = parseInt(bottomNumbers, 10);

    if (down <= 360)
        dodger.style.bottom = `${down - 10}px`
}

document.addEventListener('keydown',function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();

    } else if (e.key === "ArrowRight") {
        moveDodgerRight();

    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    };
});
