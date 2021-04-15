/*  class Hippopotamus
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/

class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    // méthode permettant de nager et faire perdre 300g
    swim() {
        return this.weight - 300;
    }

    // méthode donnant à manger et donne 1kg
    eat() {
        return this.weight + 1000;
    }

    // faire combattre deux hippopotames
    fight(hippo) {
        if (this.tusksSize > hippo.tusksSize) {
            console.log(`${this.name} a gagné la combat`);
        }else if(this.tusksSize == hippo.tusksSize){
            console.log("égalité");
        }else{
            console.log(`${this.name} a perdu la combat`);
        }
    }

    // transforme objet en string
    toString(){
        return `name : ${this.name}, weight : ${this.weight}, tusksSize : ${this.tusksSize}`;
    }

    // Cycle de vie
    startCycle(){
        
    }    
}

module.exports = Hippopotamus;



/*pour date a date + 3 semaines
			pour date a date + 15 heures
				pour i de 1 a 2
					hippopotame1 fait appel a eat()
				finpour
				pour i de 1 a 3
					hippopotame1 fait appel a swim()
				finpour
			finpour
			si date = 20h
				Afficher hippopotame1
			sinon
				continue
			finsi
		finpour */