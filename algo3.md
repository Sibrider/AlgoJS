# Exercice 3


    /* programme moyenne tab 
    *	but : calculer la moyenne des valeurs d'un tableau
    *	auteur : Vincent TEISSIER-COUTURIER
    *	date : 13/04/2021
    */
    
    programme moyenne tab
	    tableau[0..4] : réel
	    nombre : entier
	    i : entier
	    moyenne : float
	    total : entier
	    
	debut
		i = 1
		
		/*Saisir 5 entiers dans un tableau*/
		tantque i != 6
			Afficher "Saisir la valeur " + i
			Saisir nombre
			Affecter a tableau[i-1] : nombre
		fintantque
		
		// Afficher l'indice maximal du tableau
		Afficher indiceMax(tableau[])
		
		// additionner les entiers du tableau
		pour n de 0 a 4
			Affecter a total : total + tableau[n]
		finpour

		moyenne = total/5

		Afficher "Votre moyenne est" + str(moyenne)
	fin