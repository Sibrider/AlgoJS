/* Class Circle
* auteur : Vincent TEISSIER-COUTURIER
* date : 18/04/2021
*/

const Point = require('../Point/exoPoint');

class Circle extends Point {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    // renvoie l'aire du cercle
    area() {
        let aire = Math.PI * this.radius * this.radius;
        return Number(aire.toFixed(2));
    }

    // transforme objet en string
    toString() {
        let string = '';
        for (var property in this) {
            string += property + ': ' + this[property] + '\n';
        }
        return string;
    }

    // vérifie si un point est dans un cercle
    containsPoint(point) {
        if (Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2) < Math.pow(this.radius, 2)) {
            console.log(`le point de coordonées (${point.x}, ${point.y}) se trouve dans le cercle ayant pour centre le point (${this.x}, ${this.y}) et pour rayon ${this.radius}`);
        } else {
            console.log(`le point de coordonées (${point.x}, ${point.y}) ne se trouve pas dans le cercle ayant pour centre le point (${this.x}, ${this.y}) et pour rayon ${this.radius}`);
        }
    }
}

module.exports = Circle;