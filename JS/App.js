// let player = {
//     top: 720,
//     left: 680
// }

// let ball = {
//     top: 700,
//     left: 680
// }

// document.onkeydown = function (e) {
//         if (e.keyCode === 37){
//             player.left = player.left - 15
//             console.log("left")
//             movePlayer()
//         }
//         else if(e.keyCode === 39){
//             player.left = player.left + 15
//             console.log("left")
//             movePlayer()
//         }
// }

// let movePlayer = () => {
//     document.getElementById("player").style.left = player.left + "px"
//  }

var canvas = document.getElementById("myCanvas");
var shape = canvas.getContext("2d");

shape.beginPath();
shape.rect(215, 280, 50, 10);
shape.fillStyle = "white";
shape.fill();
shape.closePath();

shape.beginPath();
shape.arc(240, 276, 4, 0, Math.PI*2, false);
shape.fillStyle = "white";
shape.fill();
shape.closePath();