 ## Etape 0 : Créer un programme d'IA très basic en python :
  - Créer un programme qui pause une question à l'utilisateur et en fonction de la réponse revoie un message prédéfini. Le programme doit exactement inclure:
  - Au moins une déclaration de variable
  - Un tableau (array)
  - Une itération
  - Une condition (if ...)

 ## Etape 1 : Quizz :

  - A quoi sert console.log ? 
  Affiche le contenu de l'objet mis en paramètre dans la console JS du navigateur

  - A quoi sert var ? 
  Déclare une variable et/ou initialise sa valeur

  - Quelle est la différence avec const et let ?
const crée une constante accessible uniquement à la lecture, 
let crée une variable dont la portée est celle du bloc courant.

  - Comment définir une fonction en JS ? Utilisation du constructeur 
  function nom_fonction(paramètre) {
      action de la fonction
  }

  - Quelle est la nouvelle syntaxe d'une fonction ?
  const nom_fonction = paramètre => 'return';

  - A quoi sert document ?
  L'interface Document représente n'importe quelle page Web chargée dans le navigateur et sert de point d'entrée dans le contenu de la page Web
  Document => contenu de la page

  - Quelle est la différence avec window ?
  L'objet window représente une fenêtre contenant un document DOM
  Window => fenetre de la page web

  - A quoi sert querySelector ?
La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.

  - Quelle est la différence avec getElementById et querySelectorAll ?
  La méthode querySelectorAll() de Element renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.
  
  La méthode getElementById() de Document renvoie un objet  Element représentant l'élément dont la propriété  id correspond à la chaîne de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à un élément spécifique. Si l'élément recherché n'a pas d'ID spécifié on peut utiliser queryselector() en spécifiant le sélecteur. 

  - A quoi sert addEventListener ?
La méthode addEventListener() d'EventTarget met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible.
cible.addEventListener(type_evenement, action) 

  - Citer d'autre events pouvant être écoutés ?
  click, doubleclick, keyBoardEvent

  - A quoi sert innerText ?
Node.innerText est une propriété représentant le contenu textuel « visuellement rendu » d’un nœud. Utilisé en lecture, il renvoie une approximation du texte que l’utilisateur ou utilisatrice obtiendrait s’il ou elle sélectionnnait le contenu d’un élément avec le curseur, et le copiait dans le presse-papier.
Affichage du texte de l'element

  - Quel est la différence avec innerHTML et InsertAdjacentHTML ?
innerHTML permet d'injecter du texte avec balise HTML


element.insertAdjacentHTML(position, text); Permet d'injecter du texte à une certaine position.

  - Qu'est que la concatenation ?
La concatenation permet d'assembler des chaines de caractères gr¸ace à l'opérateur +

  - Quelle est la différence avec l'interpolation ?
`texte ${expression} texte` le ${expression} est une interpolation.

  - Citer la methode qui permet de faire une itération ( elle n'est pas dans le programme )
.forEach()
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration

 ## Etape 2 : Modification du programme :

  - Remplacer les "var" par les bons mots
  - Ecrire la fonction avec la nouvelle syntaxe
  - Utiliser une autre methode que querySelector
  - Remplacer la concatenation par une interpolation
  - Utiliser une autre methode que innerText

 ## Etape 3 : Utiliser ce dossier comme exemple pour créer votre page

  - Modifier les noms des id et des variables pour qu'elles correspondent à votre programme (s'assurer que ca marche toujours :) )
  - Convertir votre programme python en programme JS (Il devrait être dans la fonction "createMessage")
  - Faire un peut de CSS pour rendre ca Jolie

 ## Etape 4 : Mettre en ligne sur GitHhub

  - Sassurer que le nom du dossier finisse par ".github.io" (ca vous simplifiera la vie pour la suite :) )
  - Initialiser git sur ce projet
  - Mettre ce projet sur github
  - Mettre ce projet en ligne accessible à tous

