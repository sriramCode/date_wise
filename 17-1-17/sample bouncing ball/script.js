angular.module('balls', []).
directive('ballPosition', function () {
    return function (scope, element, attrs) {
        element.addClass('ball');
        var ball = scope[attrs.ballPosition];
        element.css('backgroundColor', ball.color);
        scope.$watch(function () {
            element.css({
                left: (ball.x + 5) + 'px',
                top: (ball.y + 5) + 'px'
            });
        });
    };
}).
factory('animFrame', function ($rootScope) {
    var animFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    return function (fn) {
        animFrame(function () {
            $rootScope.$apply(fn);
        });
    }
}).
controller('bounce', function ($scope, animFrame) {
    var width = 400;
    var height = 400;
    var speed = .5;
    var lastTime = new Date().getTime();

    function color() {
        var color = '#',
            i = 6;

        while (i--) {
            color += Number(Math.floor(16 * Math.random())).toString(16);
        }
        return color;
    }

    $scope.balls = [];

    $scope.changeCount = function (count) {
        while (count > 0) {
            $scope.balls.push({
                x: width * Math.random(),
                y: height * Math.random(),
                velX: 2 * speed * Math.random() - speed,
                velY: 2 * speed * Math.random() - speed,
                color: color()
            });
            count--;
        }
        while (count < 0) {
            $scope.balls.pop();
            count++;
        }
    }


    function tick() {
        var now = new Date().getTime(),
            delay = now - lastTime,
            balls = $scope.balls;

        $scope.fps = 1000 / delay;
        for (var i = 0, ii = balls.length; i < ii; i++) {
            var b = balls[i];
            b.x += delay * b.velX;
            b.y += delay * b.velY;
            if (b.x < 0) {
                b.x *= -1;
                b.velX *= -1;
            }
            if (b.y < 0) {
                b.y *= -1;
                b.velY *= -1;
            }
            if (b.x > width) {
                b.x = 2 * width - b.x;
                b.velX *= -1;
            }
            if (b.y > height) {
                b.y = 2 * height - b.y;
                b.velY *= -1;
            }
        }
        lastTime = now;
        animFrame(tick);
    }

    $scope.changeCount(100);
    tick();
});