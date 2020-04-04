
function Circle (radius) {
    this.radius = radius;
    this.area = function() {
        return  Math.pow(this.radius,2) * Math.PI;
    }
    this.perimeter = function() {
        return Math.PI * this.radius * 2;
    }
}

var c1 = new Circle(5);
var c2 = new Circle(10);

console.log(c2.perimeter())


//var myfunc = circle.perimeter.bind(circle);
// I comment it

function Car(year, color){
    this.color=color;
    this.year=year
}
var car1 = new Car(1999,'black')
console.log(car1)