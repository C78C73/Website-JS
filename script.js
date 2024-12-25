let background1 = document.getElementById("body");
let button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
    changeBackground();
});


function changeBackground() {
    let currentBackgroundColor = getComputedStyle(background1).backgroundColor;

    if (currentBackgroundColor === "rgb(0, 0, 0)") {
        background1.style.backgroundColor = "white";
        background1.style.color = "black"; 
    } else {
        background1.style.backgroundColor = "black";
        background1.style.color = "white"; 
    }
}
