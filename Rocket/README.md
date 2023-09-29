### Fonctionnement attendu
Au clic sur le bouton de mise à feu, le compte à rebours s'affiche immédiatement sur le panneau d'affichage et démarre à 10.  Puis chaque seconde, le compte à rebours diminue de 1. Lorsque "0" est affiché, la fusée devra décoller !


### Conseils et astuces

 - Pour gérer le ***temps*** en Javascript, il va falloir utiliser les ***chronomètres*** !
 - S'il est possible *d'ajouter* un gestionnaire d'événement, il doit sans doute être possible de le *supprimer*...
 - Organisez votre code pour vous y retrouver : déclaration des constantes et variables globales en premier, puis définition des fonctions, puis code principal tout en bas.
 - Jetez un oeil au fichier rocket.css, observer les classes qui pourront servir : disabled, tookOff, tiny, normal, big.

## Bonus
 2. Ajouter un bouton pour annuler la mise à feu   
    Ce bouton est visible dès le début mais ne sera actif qu'une fois la mise à feu déclenchée et jusqu'au décollage.   
    Une fois le compte à rebours terminé, il n'est plus possible de l'arrêter, le bouton est désactivé (classe CSS disabled)
 3. Ajouter un bouton pour remettre à zéro le décollage
