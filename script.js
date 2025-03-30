let tCount=0;
const clickcount = document.getElementById("click-area");
const result = document.getElementById("display")

function count(){
    tCount++;
    result.innerHTML = "Total Click:" + tCount
}