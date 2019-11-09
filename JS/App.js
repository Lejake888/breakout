let player = {
    left: 600,
    top: 520
}

let ball = {
    left: 630,
    top: 505
}

document.onkeydown = function (e) {
        if (e.keyCode === 37){
            player.left = player.left - 15
            console.log("left")
            movePlayer()
        }
        else if(e.keyCode === 39){
            player.left = player.left + 15
            console.log("left")
            movePlayer()
        }
}

let movePlayer = () => {
    document.getElementById("player").style.left = player.left + "px"
 }