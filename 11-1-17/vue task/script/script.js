var vm = new Vue({
    el: '#app',
    data: {
        circles: '',
        color: '',
        balls: [],
        width: 400,
        height: 400,
        speed: 0.5
    },
    methods: {
        insertCircle: function () {
            while (this.circles > 0) {
                console.log(this.circles)
                this.circles--
                    this.balls.push({
                        x: this.width * Math.random(),
                        y: this.height * Math.random(),
                        velX: 2 * this.speed * Math.random() - this.speed,
                        velY: 2 * this.speed * Math.random() - this.speed,
                    });
                console.log(this.balls[0])
            }
        },
        colorfn: function () {
            alert("hello")
            console.log("Inside color function")
        }
    }
})