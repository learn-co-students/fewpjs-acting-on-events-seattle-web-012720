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

document.addEventListener('keydown',function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        console.log(e.key)
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});
