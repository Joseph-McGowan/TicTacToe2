const gameBoard = function () {
    const tiles = {
        a0 : 0, a1 : 0, a2 : 0,
        b0 : 0, b1 : 0, b2 : 0,
        c0 : 0, c1 : 0, c2 : 0
    }
    return {tiles};
}

function cellClicked(e)
{
    e.target.style.background = 'white';
}

let btn = document.getElementById("but");
btn.addEventListener('click', eventFunc);

let cell = document.querySelector("div.cell");
cell.addEventListener('click', (e) => e.target.style.background = 'blue');

const cella1 = document.getElementById("a1");
cella1.addEventListener('click', cellClicked);


function eventFunc()
{
    alert("hello");
    console.log("hello from the console");
}
function main()
{
    console.log("hello");
}
