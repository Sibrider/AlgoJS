/*  class Hippopotamus
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/

class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
        console.log(`hippopotamus ${name} is created with these characteristics weight : ${weight}, tusks size : ${tusksSize}`)
    }

    // méthode permettant de nager et faire perdre 300g
    swim() {
        this.weight = Number((this.weight - 0.3).toFixed(1));
        return `${this.name} a perdu 300g et pèse : ${this.weight} kg`;
    }

    // méthode donnant à manger et donne 1kg
    eat() {
        this.weight += 1;
        return `${this.name} a pris 1 kg et pèse : ${this.weight} kg`;
    }

    // faire combattre deux hippopotames
    fight(hippo) {
        console.log(`${this.name} VS ${hippo.name} 
        \rTS de ${this.name} : ${this.tusksSize} - TS de ${hippo.name} : ${hippo.tusksSize}
        `);
        if (this.tusksSize > hippo.tusksSize) {
            console.log(`${this.name} a gagné la combat`);
        } else if (this.tusksSize == hippo.tusksSize) {
            console.log("égalité");
        } else {
            console.log(`${this.name} a perdu la combat`);
        }
    }

    // transforme objet en string
    toString() {
        let str = '';
        for (var p in this) {
            str += p + ': ' + this[p] + '\n';
        }
        return str;
    }

    // Cycle de vie
    startCycle() {
        for (let jour = 1; jour < 22; jour++) {
            let heure = 0;
            console.log(`======================== JOUR ${jour} ========================`);
            for (heure; heure < 15; heure++) {
                console.log(`\n========= ${heure} HEURE(S) =========\n`);
                for (let i = 0; i < 2; i++) {
                    console.log(this.eat());
                }
                for (let i = 0; i < 3; i++) {
                    console.log(this.swim());
                }
            }
            while (heure != 20) { heure++ }
            console.log(`\n========= ${heure} HEURES =========
            
            \r${this.toString()}`);
        }
    }
}

module.exports = Hippopotamus;