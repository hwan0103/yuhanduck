// Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327006;

function drawNum(num) {
    // 숫자 표시 위치와 스타일 설정
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";

    // 숫자를 캔버스에 그리기
    ctx.fillText(num, 10, 30);
}

// (50, 300) (974, 300) magenta 3px
ctx.beginPath();
ctx.moveTo(50, canvas.height / 2);
ctx.lineTo(canvas.width - 50, canvas.height / 2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

drawNum(studentID); // 화면 좌측 상단에 숫자 쓰기
