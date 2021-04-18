# Exercice 1

```
    /* programme compare chaine 
    *	but : déterminer si la première chaine de caractère est deux fois plus grande que la deuxième
    *	auteur : Vincent TEISSIER-COUTURIER
    *	date : 13/04/2021
    */
		    
	debut
		afficher "Saisir chaine 1"
		saisir chaine1

		afficher "Saisir chaine 2"
		saisir chaine2
				
		/*Compare si la chaine 1 est 2 fois plus grande que la chaine 2*/
		si tailleChaine1 >= 2*tailleChaine2 alors
			afficher "La chaine 1 est au moins 2 fois plus grande que la chaine 2"
		sinon
			afficher "La chaine 1 n'est pas 2 fois plus grande que la chaine 2"
		finsi
	fin
```