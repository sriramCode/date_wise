$(document).ready(function () {
    var isAnimating = false;

    var values = {
        ball: {
            speed: 8,
            x: Math.floor(Math.random() * 50),
            y: Math.floor(Math.random() * 50),
            directionX: 1,
            directionY: 1,
            radius: 10
        },
        playground: {
            width: parseInt($("#playground").width()),
            height: parseInt($("#playground").height())
        },
        playerA: {
            x: 0,
            left: $("#playerA").offset().left,
            height: $("#playerA").height(),
            width: $("#playerA").width()
        }

    };


    // console.log($("#playerA").offset().top);
    //edge detection
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
    //rendering the position of the ball
    function renderball() {
        $("#ball").css("left", values.ball.x);
        $("#ball").css("top", values.ball.y);
        // $("#scoreB").text(values.playerB.score);
        // $("#scoreA").text(values.playerA.score);
    }
    //moving ball
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
            $("#ball").hide();
        }
        values.ball.x += values.ball.speed * values.ball.directionX;
        values.ball.y += values.ball.speed * values.ball.directionY;
        renderball();
        // var playerB_pos = values.ball.y - values.playerB.height / 2;
        // isAnimating = true;
    }

    //player movements
    $("#playground").mousemove(function (e) {
        values.playerA.x = parseInt(e.pageX - values.playerA.left - parseInt($("#playerA").width()));
        //console.log(values.playerA.top + "  " + e.pageY);
        $("#playerA").css("left", values.playerA.x);
    });
    setInterval(moveball, 900 / 30);
});

function insert(ballNumber) {
    console.log(ballNumber);
    isAnimating = false;
}