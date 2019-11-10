let player = {
    left: 600,
    top: 520
}

let ball = {
    left: 630,
    top: 505
}

let blocks =
    [ 
        {left: 300, top: 100},
        {left: 350, top: 100},
        {left: 400, top: 100},
        {left: 450, top: 100},
        {left: 500, top: 100}
    ]

document.onkeydown = function (e) {
        if (e.keyCode === 37){
            player.left = player.left - 15
            console.log("left")
            movePlayer()
        }
        else if(e.keyCode === 39){
            player.left = player.left + 15
            console.log("right")
            movePlayer()
        }
}

let movePlayer = () => {
    document.getElementById("player").style.left = player.left + "px"
}

let createBoxes = () => { 
    document.getElementById("blocks").innerHTML = "";
    for (let i = 0; i < blocks.length; i++) {
        document.getElementById("blocks").innerHTML +=`<div id='blocks' style='left:${blocks[i].left}px; top:${blocks[i].top}px;'></div>`; 
    }
}

function game() {
    setTimeout(game,150) 
    if (blocks) {
        createBoxes()
    }
}

game()
