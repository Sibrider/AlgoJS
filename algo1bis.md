# Exercice 1

## a
    
    classe Hippopotamus
    debut
	    constructeur(poids, nom, tailleDefense)
	    debut
	        this.poids : float
	        this.nom : chaine
	        this.tailleDefense : entier
	    fin
		
		// méthode permettant de nager et faire perdre 300g
		méthode swim()
		debut
			Affecter à this.poids : this.poids-300
		fin

		// méthode donnant à manger et donne 1kg
		méthode eat()
		debut
			Affecter à son.poids : this.poids+1000
		fin

		// faire combattre deux hippopotames
		fonction HippopotamusFight(Hippopotamus)
		debut
			si this.tailleDefense > Hippopotamus.tailleDefense
				Afficher this.nom + " gagne le combat"
			sinon si this.tailleDefense = Hippopotamus.tailleDefense
				Afficher "match nul"
			sinon si this.tailleDefense < Hippopotamus.tailleDefense
				Afficher this.nom + " perd le combat"
		fin
    fin

## b

    méthode toString()
    		debut
    			renvoie "nom : " + this.nom + ", poids : " + str(this.poids) + ", taille : " + str(this.tailleDefense)
    		fin


## c

    Affecter a hippopotame1 nouveau Hippopotamus(500, "hippopotame1", 100)
    Affecter a hippopotame2 nouveau Hippopotamus(600, "hippopotame2", 90)

	hippotame1.HippopotamusFight(hippopotame2)

## d

	Affecter a hippopotame1 nouveau Hippopotamus (500, "hippopotame1", 100)

	méthode cycleDeVie(Hippopotamus)
	debut
		pour date a date + 3 semaines
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
		finpour
	fin