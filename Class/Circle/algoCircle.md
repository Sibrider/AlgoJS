# Exercice 3

## a

    Affecter a Point : class point

    classe Circle extension de Point
    debut
       	constructeur(x, y, radius)
       	debut
       	    this.x : point(x)
    		this.y : point(y)
       	    this.radius : entier
       	fin

       	// renvoie l'aire du cercle
    	méthode area()
    	debut
    		aire : float
    		Affecter a aire : pi * this.radius * this.radius
    		renvoie aire
    	fin

    	méthode containsPoint(point)
    	debut
    		si (point.x - this.x)² + (point.y - this.y)² < this.radius²
    			Afficher "le point de coordonées (point.x, point.y) se trouve dans le cercle ayant pour centre le point (this.x, this.y) et pour rayon this.radius"
    		sinon
    			Afficher "le point de coordonées (point.x, point.y) ne se trouve pas dans le cercle ayant pour centre le point (this.x, this.y) et pour rayon this.radius"
    		finsi
    	fin
    fin
