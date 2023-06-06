# Overview

Vous faites partie de l'équipe qui explore Mars en envoyant des véhicules télécommandés à la surface de la planète.

Développer une API qui traduit les commandes envoyées depuis la Terre en instructions comprises par le rover.

## Requirements
    Le rover possede une position (x,y) et une direction (N, S, E, W). 

    On vous donne le point de départ initial (x,y) d'un rover et la direction (N,S,E,W) à laquelle il fait face.

    Le rover reçoit un tableau de caractères de commandes.

    Il y 4 commandes possible:

    - forward (f): le rover avance dans la direction  à laquelle il fait face.
    - backward (b): le rover recule dans la direction  à laquelle il fait face.
    - left (l): le rover tourne à gauche. Le rover change sa direction.
    - right (r): le rover tourne à droite. Le rover change sa direction.

## Instruction

    - Implémenter les commandes qui déplacent le rover vers l'avant/l'arrière (f,b).

    - Implémentez les commandes qui tournent le rover vers la gauche/droite (l,r).

    - Impémentez le comportement du rover sur les bords de la map.

    > Attention, les planètes sont des sphères.
    
    *Par exemple, sur un map de taille 5x5, le rover se trouve en position (1,1). Il avance vers la gauche. Il se retouve en position (5,1).
    De même pour les bords verrticaux.*

    -  Implementez la détection d'obstacles avant chaque déplacement vers une nouvelle case.

    >  Si une séquence donnée de commandes rencontre un obstacle, le rover se déplace jusqu'au dernier point possible, interrompt la séquence et signale l'obstacle.

# Rules

    Le but du kata est de pratiquer le TDD. 
    
    **Pas d' excuses**


