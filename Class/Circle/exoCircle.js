/* Class Circle
* auteur : Vincent TEISSIER-COUTURIER
* date : 18/04/2021
*/

const Point = require('../Point/exoPoint');

class Circle extends Point {
    constructor (point,radius){
        super(x,y);
        this.point = point;
        this.radius = radius;
    }

    // renvoie l'aire du cercle
    area(){
        let aire = Math.PI * this.radius * this.radius;
        return aire;
    }

    containsPoint(){

    }
}

module.exports = Circle;