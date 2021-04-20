/* class Points
*   auteur : Vincent TEISSIER-COUTURIER
*   date : 18/04/2021
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // getter pour obtenir la valeur de x
    getX() {
        return this.x;
    }

    // setter pour définir la valeur de x
    setX(x) {
        this.x = x;
    }

    // getter pour obtenir la valeur de y
    getY() {
        return this.y;
    }

    // setter pour définir la valeur de y
    setY(y) {
        this.y = y;
    }

    // transforme objet en string
    toString() {
        let string = '';
        for (var property in this) {
            string += property + ': ' + this[property] + '\n';
        }
        return string;
    }
}

module.exports = Point;