let tCount = 0;
let startTime = null;
let intervalId = null; 
const clickcount = document.getElementById("click-area");
const result = document.getElementById("display");

function count() {
    if (!startTime) {
        startTime = Date.now();
        intervalId = setInterval(updateAverage, 100); 
    }

    tCount++;
    updateDisplay();
}

function updateAverage() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const avgClicksPerSecond = elapsedTime > 0 ? (tCount / elapsedTime).toFixed(2) : 0;
    result.innerHTML = `Total Click: ${tCount}<br>${avgClicksPerSecond} click/s`;
}

function updateDisplay() {
    result.style.fontWeight = "bold";
    result.style.color = "black";
    result.style.fontSize = "24px";
    result.style.transition = "all 0.3s ease";
}