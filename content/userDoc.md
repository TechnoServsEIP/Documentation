+++
title = "User Documentation"
date = "2020-08-16"
author = "TechnoServs Team"
+++

## Resumé

Ce document a pour but d’établir un guide de l’utilisateur qui permettrait à toute personne d’utiliser notre solution.

TechnoServs est une solution de hosting de serveurs de jeux vidéos dans le cloud, avec des offres à la demande pour chacun, en simplifiant chaques étapes du processus.

Afin de mieux comprendre les fonctionnalités mises en place, nous avons créé un schéma fonctionnel simple. (voir Schéma fonctionnel)

Pour accéder à notre plateforme, veuillez-vous rendre sur la partie accéder à la plateforme.

Pour toute aide sur la gestion des serveurs de jeux, vous retrouverez le guide sur la section serveur de jeux.

Pour toutes autres questions, rendez-vous sur notre FAQ.\
\
\
\
\
## Cartouche du document


| Titre               	| Documentation utilisateur                                         	|
|---------------------	|-------------------------------------------------------------------	|
| Objet               	| Document pour l’utilisateur                                       	|
| Auteur              	| Valentin Ichkour, Auguste Ziegler, Jérémie Bruhwiler              	|
| Responsable         	| Lisa Nay                                                          	|
| E-mail              	| technoservs_2021@epitech.eu                                       	|
| Mots-clés           	| Documentation utilisateur, EIP, TechnoServs, technique, minecraft 	|
| Promotion           	| 2021                                                              	|
| Date de mise à jour 	| 14 août 2020                                                      	|
| Version du modèle   	| 1.0                                                               	|
\
\
## Tableau des révisions

| Date       	| Version 	| Auteur                                                  	| Section(s) 	| Commentaire      	|
|------------	|---------	|---------------------------------------------------------	|------------	|------------------	|
| 14/08/2020 	| 1.0     	| Valentin Ichkour, Auguste Ziegler,<br>Jérémie Bruhwiler 	| Toutes     	| Première version 	|

## Schéma fonctionnel

![image alt text](/UD/SchémaFonctionnel.png)
Ici nous avons un schéma fonctionnel de ce que vous pouvez réaliser sur notre plateforme.

## Accès

Afin d'accéder à notre site web, veuillez-vous rendre sur le navigateur internet de votre choix (ex. Google Chrome, FireFox, Safari…), et commencez à taper [technoservs.ichbinkour.eu](technoservs.ichbinkour.eu). 

Toutefois si vous n'avez pas accès c’est surement car vous n’avez pas encore de compte chez TechnoServs, si c’est le cas veuillez vous référer à la section suivante “création du compte”, sinon essayer de nous faire un ticket zendesk en nous expliquant votre problème et nous vous répondrons dans les plus brefs délais.

## Création du compte

Afin de vous créer un compte sur notre plateforme, vous devez vous rendre sur la page “/auth/register” qui devrait ressembler à ça:

![image alt text](/UD/register.png)
Il vous suffit juste d’entrer votre mail dans les deux premiers champs ainsi que votre mot de passe dans les deux derniers (en faisant bien attention que le mail et le mot de passe soit identique), après quoi il ne reste plus qu’à appuyer sur le bouton “register” présent en bas de la page.

Une fois fait, vous devriez recevoir un mail semblable sur la boîte mail que vous avez renseigné (voir ci-dessous):
![image alt text](/UD/mail.png)
Il vous manque juste à cliquer sur le texte en bleu “here” pour confirmer votre adresse mail, suite à quoi vous devriez être redirigé sur le site web ou alors référez-vous à la prochaine section “se connecter à son compte”.

## Se connecter à son compte

Si vous souhaitez vous connecter à votre compte TechnoServs, munissez-vous de votre adresse mail et de votre mot de passe que vous aviez utilisé lors de la création de votre compte chez TechnoServs.
Si vous n’en n’avez pas merci de vous référer à la section précédente “création du compte”.
Pour vous identifier veuillez vous rendre sur “/auth/login”, dont la page devrait ressembler à ceci:
![image alt text](/UD/login.png)
Vous n’avez alors plus qu’à entrer dans le premier champ votre adresse mail, et dans le deuxième votre mot de passe. Veuillez bien faire attention toutefois que ce soient les informations que vous avez entré précédemment lors de la création de votre compte.

## Créer un serveur de jeux

Afin de créer son serveur de jeux, rien de plus simple, il vous suffit de vous rendre sur la page d'accueille “/app”.
Elle devrait ressembler à ceci:
![image alt text](/UD/instances.png)
Vous pouvez constater qu’il y a un bouton “new instance”, il vous suffit de cliquer dessus et vous devriez être redirigé vers une nouvelle page.
![image alt text](/UD/create1.png)
C’est la première page afin de créer votre serveur de jeux, vous y voyez un champ, dans celui-ci vous devez y entrer le nom que vous souhaitez donner à votre serveur (vous pourrez toujours le modifier plus tard dans les option).
Une fois votre nom de serveur choisi, cliquez sur le bouton “suivant”, vous pouvez alors passer à la section suivante “Sélectionner son jeux”

### Sélectionner son jeux

Vérifiez tout d’abord que vous êtes bien sur cette page ci (attention les jeux peuvent varier) :
![image alt text](/UD/create2.png)
Si ce n’est pas le cas, merci de voir la section précédente “créer son serveur de jeux”.
Si c’est bien la même page (attention encore la liste des jeux disponibles ne sera pas forcément identique), il vous suffit alors à cliquer sur le jeu souhaité et cliquer sur le bouton “suivant”.

### Sélectionner son offre
Vérifiez tout d’abord que vous êtes bien sur cette page ci (attention les différentes offres peuvent varier) :
![image alt text](/UD/create3.png)
Si ce n’est pas le cas, merci de voir la section précédente “Sélectionner son jeux”.
Si c’est bien la même page (attention encore les différentes offres disponibles ne seront pas forcément identiques), vous avez accès à l'ensemble de nos offres pour le jeu que vous avez sélectionné précédemment.
Prenez votre temps pour choisir l’offre la plus adaptée à votre façon de jouer ou vos objectifs.
Une fois la décision prise vous avez juste à cliquer sur l’offre ou le bouton “sélectionner” de l’offre qui vous correspond, puis de cliquer sur “continue”.
![image alt text](/UD/create4.png)
Vous devriez alors avoir un résumé de votre serveur comme la photo ci-dessus, appuyez seulement sur “start server”, et votre serveur devrait être alors opérationnel.
Vous allez alors être redirigé sur la page principale et devriez constater un élément portant le nom que vous lui avez attribué précédemment un peu comme ceci:
![image alt text](/UD/servInfo.png)

## Manager ses serveurs


### Supprimer un serveur

Une fois sur le menu principale cliquez sur le serveur que vous souhaitez modifier vous aurez alors une page similaire qui devrait s’afficher:
![image alt text](/UD/servInfo.png)
Appuyez alors sur “delete” et confirmez bien que vous voulez le supprimer (attention toute suppression est définitive).

# FAQ
### Je n’arrive pas à avoir accès à mon compte.
Vérifiez tout d'abord que vous avez bien un compte chez nous, dans le cas contraire référez vous à la section “création du compte”.
Que vous avez bien votre mot de passe et adresse email utilisé lors de la création de votre compte.

### Je n’ai pas reçu le mail de confirmation.
Les délais sont d’un jour ouvré, attendez un peu dans le cas contraire faites nous un ticket sur zendesk.

### J’ai oublié mon mot de passe.
Étant en beta l’option n’est pas encore disponible, veuillez alors nous faire un ticket sous zendesk en précisant “mot de passe oublié” dans votre demande.

### Où puis-je signaler un bug ?
Pour notre BÊTA Test, nous avons créé un discord auquel vous pouvez signaler tout problème.
Dans le channel bug-report, vous pouvez nous envoyer un screenshot avec un commentaire.

### Certains onglets ne fonctionnent pas dans le dashboard.
Étant en BÊTA  certaines options ne sont pas encore disponibles. Nous faisons de notre mieux pour développer toute les fonctionnalités.

### Lorsque je suis sur téléphone, le site ne fonctionne pas.
Notre dashboard n’est pas responsive. Nous essayons de développer une application pour bientôt.

### Les ressources utilisées du serveur ne semblent pas être correctes.
Étant en BÊTA, cette option est prévue très prochainement.
