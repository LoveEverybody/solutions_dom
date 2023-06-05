function increase() {
    const increaseIt = document.getElementById("counter-value").innerHTML
    const increased = Number(increaseIt) + 1
    //increaseIt = increased  
    document.getElementById("counter-value").innerHTML = increased
}

function decrease() {
    const decreaseIt = document.getElementById("counter-value").innerHTML
    if (decreaseIt !== "0") {
        const decreased = Number(decreaseIt) - 1
        document.getElementById("counter-value").innerHTML = decreased
    }
}

const element = document.getElementById("counter-increment");

window.addEventListener('load', () => {
    const plusOne = document.getElementById("counter-increment")
    plusOne.addEventListener('click', increase);

    const lessOne = document.getElementById("counter-decrement")
    lessOne.addEventListener('click', decrease);
})

