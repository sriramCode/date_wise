var i;
var va = 1;
var ballId = 1;
var ball
var values = {

    playground: {
        width: parseInt($("#playground").width()),
        height: parseInt($("#playground").height())
    },
    ball: {
        speed: 8,
        x: Math.floor(Math.random() * 50),
        y: Math.floor(Math.random() * 50),
        directionX: 1,
        directionY: 1,
        radius: 10
    },
    playerA: {
        x: 0,
        left: $("#playerA").offset().left,
        height: $("#playerA").height(),
        width: $("#playerA").width()
    }
};


//moves paddle
$("#playground").mousemove(function (e) {
    values.playerA.x = parseInt(e.pageX - values.playerA.left - parseInt($("#playerA").width()));
    $("#playerA").css("left", values.playerA.x);
});

function insert(ballNumber) {
    console.log(ballNumber);
    for (i = 1; i <= ballNumber; i++) {
        $('#playground').append("<div class='ball' style='top:" + Math.floor(Math.random() * 150) + "px;left:" + Math.floor(Math.random() * 400) + "px;' id='" + i + "'></div>");
        //console.log(ballId);
        ballId++;


    }
    ball = ballNumber;
    setInterval(moveball, 1000 / 30);
    //console.log(Math.floor(Math.random() * 500))
}


function hitsTop() {
    var y = values.ball.y;
    return y < 0;
}

function hitsRight() {
    return values.ball.x > values.playground.width - 20;
}

function hitsBottom() {
    return values.ball.y > values.playground.height + 20;
}

function hitsLeft() {
    return values.ball.x < 0;
}

function hitsPlayerA() {
    var ballX = values.ball.x;
    var ballY = values.ball.y;
    var playerAX = values.playerA.x;
    return ballX <= playerAX + values.playerA.width && ballX > playerAX && ballY >= values.playground.height - values.playerA.height - values.ball.radius;
}






function renderball() {

    $("#1").css("left", values.ball.x);
    $("#1").css("top", values.ball.y);

    //console.log("inside render");
    // $("#scoreB").text(values.playerB.score);
    // $("#scoreA").text(values.playerA.score);
}

function moveball() {
    if (hitsTop()) {
        values.ball.directionY *= -1;
    }
    // console.log(hitsTopBottom());
    if (hitsRight()) {
        values.ball.directionX *= -1;
    }
    if (hitsLeft()) {
        values.ball.directionX = 1;
    }
    if (hitsPlayerA()) {
        values.ball.directionY *= -1;
    }
    if (hitsBottom()) {
        console.log("inside if");
        $("#1").hide();
    }





    //$('#1').css("top", values.ball.y);
    //$('#1').css("left", values.ball.x);
    values.ball.x += values.ball.speed * values.ball.directionX;
    values.ball.y += values.ball.speed * values.ball.directionY;
    renderball();

}