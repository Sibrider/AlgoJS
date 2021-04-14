# Exercice 2
    
    
    /* programme somme entier 
    *	but : calculer la somme des nombres compris entre 1 et un entier saisi
    *	auteur : Vincent TEISSIER-COUTURIER
    *	date : 13/04/2021
    */
    
    programme somme entier
	    nombre : entier // entier a saisir
	    somme : entier // resultat
	    i : entier // affecter a 0
	    
	debut
		afficher "Saisir nombre entier"
		saisir nombre
		
		Affecter a i = 0

	/*tant i n'est pas égal à nombre incrementer i de 1 et i de i-1*/
		tantque i != nombre continue
			Affecter a i = i+1	
			Affecter a somme = i+i-1
		fintantque		
	fin