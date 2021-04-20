const Hippopotamus = require('./Class/Hippopotamus/exoHippopotamus');
const Point = require('./Class/Point/exoPoint');
const Circle = require('./Class/Circle/exoCircle');

//console.log("\n========== TEST CLASS HIPPOPOTAMUS ==========");
//
//let hippo1 = new Hippopotamus("Hippo", 120, 150);
//let hippo2 = new Hippopotamus("Oppih", 100, 90);
//
//hippo1.fight(hippo2);
//
//console.log(hippo1.toString());
//
//console.log("\n - CYCLE OF LIFE");
//
//hippo1.startCycle();
//
//console.log("\n========== TEST CLASS POINT ==========");
//
//let point = new Point(10,14);
//
//console.log("\n - Initialise objet ( x = 10, y = 14)");
//
//point.toString();
//
//console.log("\n - TEST GET X");
//
//point.getX();
//
//console.log("\n - TEST SET X -> (12)");
//
//point.setX(12);
//
//console.log("\n - TEST GET Y");
//
//point.getY();
//
//console.log("\n - TEST SET Y -> (19)");
//
//point.setY(19);
//
//console.log(`\nTEST TO STRING`);
//
//console.log(point.toString());
//
console.log("\n========== TEST CLASS CIRCLE ==========");

let point = new Point(10, 14);
let circle = new Circle(1, 1, 20);

console.log(circle);
console.log(point);

console.log(circle.area());

circle.toString();

circle.containsPoint(point);