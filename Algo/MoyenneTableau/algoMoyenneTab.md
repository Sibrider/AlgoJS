# Exercice 3

```
    /* programme moyenne tab 
    *	but : calculer la moyenne des valeurs d'un tableau
    *	auteur : Vincent TEISSIER-COUTURIER
    *	date : 13/04/2021
    */
    
    programme moyenne tab	    
	    
	debut
		// initialise les variables
		Affecter a tab : []
		Affecter a total : 0
		
		// Ajoute les valeurs dans un tableau
		pour i de 0 a 5
			Afficher "Saisir la valeur " + i + " :"
			Saisir nombre
			Affecter a tableau[i-1] : nombre
		finpour
		
		// Afficher l'indice de la valeur maximal du tableau
		Affecter a valeurMaxTab : valeur max du tableau
		Affecter a indiceMax : indice max (valeurMax)
		Afficher "l'indice de la valeur maximal du tableau est " + indiceMax + " qui pointe sur la valeur " + valeurMax
		
		// additionner les entiers du tableau
		pour n de 0 a 4
			Affecter a total : total + tableau[n]
		finpour

		// calcul et affiche la moyenne
		moyenne = total/5
		Afficher "Votre moyenne est" + str(moyenne)
	fin
```