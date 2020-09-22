+++
title = "User Documentation"
date = "2020-08-16"
author = "TechnoServs Team"
+++

## Resumé
Ce document a pour but d’établir un guide du développeur qui permettrait à toute personne rejoignant l’équipe de contribuer au projet en comprenant son état, sa structure, et la façon de contribuer, sans avoir à nous solliciter pour obtenir les informations nécessaires.

TechnoServs est une solution de hosting de serveurs de jeux vidéos dans le cloud, avec des offres à la demande pour chacun, en simplifiant chaques étapes du processus.

Notre architecture est basé sur un backend en language Go et un frontend en VueJS avec le framework Quasar. (voir Architecture)

Nous utilisons GitHub comme outils de versioning et organisons nos tâches via Trello. Pour communiquer, nous utilisons Slack et Hangout. (voir Outils d’organisation et de communication)

Notre serveur utilise l’API docker afin de gérer les containers, qui eux héberge un serveur de jeu. Nous avons mis à disposition une API afin de permettre à l’application web de gérer les serveurs de jeux. (voir Présentation des technologies)

La documentation de l’API est généré par Postman, elle reprend tous les endpoints permettant de gérer les offres, les utilisateurs et les serveurs de jeux. (voir API et interfaces)

Le linter officiel de golang est utilisé pour le backend. Le front utilise Eslint.
(voir Norme du code)

Le backend utilise la librairie standard de test de golang et les github action afin d'automatiser les tests unitaires. Côté frontend le framework Jest a été intégré.
(voir Tests)

Le déploiement de la solution est automatisé via github action.
Le dashboard est déployé sur Netlify. Le site se trouve sur le lien suivant: [technoservs.ichbinkour.eu](https://technoservs.ichbinkour.eu). (voir Déploiement de la solution)

## Cartouche du document
| Titre               	| Documentation technique                                         	|
|---------------------	|-----------------------------------------------------------------	|
| Objet               	| Documentation technique du projet TechnoServs                   	|
| Auteur              	| Jeremie Bruhwiler, Samuel Diop, Sullivan Verdan                 	|
| Responsable         	| Lisa Nay                                                        	|
| E-mail              	| technoservs_2021@epitech.eu                                     	|
| Mots-clés           	| Documentation technique, EIP, TechnoServs, technique, minecraft 	|
| Promotion           	| 2021                                                            	|
| Date de mise à jour 	| 15 août 2020                                                    	|
| Version du modèle   	| 1.0                                                             	|

## Tableau des révisions
| Date       	| Version 	| Auteur                                                  	| Section(s) 	| Commentaire      	|
|------------	|---------	|---------------------------------------------------------	|------------	|------------------	|
| 14/08/2020 	| 1.0     	| Valentin Ichkour, Auguste Ziegler,<br>Jérémie Bruhwiler 	| Toutes     	| Première version 	|

## Architecture

![image alt text](/TD/archi.png)
TechnoServs est hébergé sur un serveur Azure (Ubuntu).
Il host un serveur en Go connecté à une base de données MongoDB et PostgreSQL.

MongoDB est utilisé pour stocker les offres des jeux proposés associés aux caractéristiques du serveur de jeu.
PostgreSQL stocke les données des utilisateurs ainsi que les informations des serveurs de jeux.

L’API utilisé par le site web de TechnoServs permet de gérer les offres, serveurs de jeux et utilisateurs.

## Composants et modules de la solution
### Diagramme de Classes Backend
![image alt text](/TD/diagramClass.png)
L’API est basé sur une architecture **Model**, **Vue**, **Controller (MVC)**.  
Elle est composée de quatre principaux modules :  
* App  
* Utilisateurs (lié au modèle Account)  
* Offres (lié au modèle Offers)  
* Serveur de jeu (lié au modèle DockerStore)  

Le module App contient toutes les fonctionnalités non basées sur un modèle ou un controller tel que les fonction d’initialisation de bases de donnée, la gestion des CORS.

Le module Offres est étroitement lié au serveur de jeu puisque les caractéristiques de celui-ci dépend de l’offre associée.
## Présentation des technologies
### Backend
#### Golang
Go est un langage de programmation open source qui facilite la création de logiciels simples, fiables et efficaces. Il a été conçu pour le cloud et la scalabilité. De plus un grand nombre de librairie et d’outils cloud et devops existent pour ces langages. Ce qui en faisait un choix évident pour notre solution.

#### PostgreSQL
PostgreSQL est un puissant système de base de données relationnelle objet open source avec plus de 30 ans de développement actif qui lui a valu une solide réputation de fiabilité, de robustesse des fonctionnalités et de performances. L’utilisation de Postgres permet une structuration efficace de nos data afin de gérer au mieux nos utilisateurs et les containers utilisés par ces derniers.

#### MongoDB
MongoDB est une base de données distribuée, universelle et basée sur des documents, qui a été conçue pour les développeurs d'applications modernes et pour l'ère du Cloud. Nous l’utilisons essentiellement pour enregistrer nos offres qui n’ont pas de forme fixe et peuvent évoluer dans le temps.

#### Docker
Docker est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels. Plus léger et performant qu’une vm ainsi que plus facilement gérable cela nous permet d’offrir une bonne qualité de service sans compliquer la stack technique.

### Dashboard
#### VueJS
Pour le développement de notre Dashboard, nous avons utilisé du VueJS avec le framework Quasar. Ce framework a la particularité de pouvoir rendre un visuel sur un navigateur web, mais aussi de générer une application android et ios tout en utilisant seulement un seul code source.

## Outils d’organisation et de communication
### Github
Les outils d’organisation de TechnoServs sont la feature Issue de **GitHub**. Lorsque nous souhaitons implémenter une nouvelle feature, nous créons une Issue comme ci-dessous.  
![image alt text](/TD/github1.png)
Dans cet exemple, nous mettons une description qui résume la tâche en une phrase, ainsi que la charge estimée, ainsi que la “Definition of Done” qui correspond à ceux que doit fonctionner une fois que la tâche est terminée.  
![image alt text](/TD/github2.png)  
Une fois l’issue créée, elle se retrouve dans la colonne “To Do” dans notre tableau des issues. Ceci nous permet de voir à quel stade d’avancement nous nous trouvons pour le Sprint.  

### Trello
Pendant chaque inter-sprint, nous mettons chaques features et idées dans un tableau sur **Trello**.
![image alt text](/TD/trello.png)  

### Slack
Pour avoir une bonne communication et un bon suivi de chaque développeur, nous utilisons Slack avec un intégration GitHub, ce qui nous permet ainsi de voir les commits de chacun pour chaque projet.  
![image alt text](/TD/slack.png)  

Pour prendre des décisions, nous devons faire des appels, qui peuvent être long. Pour cela nous utilisons Google Hangout directement relié à Slack, ce qui nous permet de faire des partages d’écrans, et de partager nos opinions.  
![image alt text](/TD/hangout.png)  

### Google Drive
Pour le stockage de nos documents, nous utilisons Google Drive, qui nous fournit une interface graphique simple à utiliser.  


## API et interfaces
  
[URL de la documentation](https://documenter.getpostman.com/view/5496386/T1LPE7Ec)  
La documentation de l’API est généré par Postman, elle reprend tous les endpoints permettant de gérer les offres, utilisateurs et serveurs de jeux.
  
Afin d’obtenir un token vous devez:  
* Créer un compte via l’endpoint **createAccount**.  
* Confirmer ensuite votre compte avec l’endpoint **confirmation** en passant en paramètre le token reçu après la création du compte.  
* Enfin connectez-vous avec votre compte avec l’endpoint **connection** et récupérer le token permettant d’effectuer les autres requêtes à l’API.  
  
Certains endpoints ne sont disponibles qu’aux admins. Seul un admin peut promouvoir un nouvel admin. Le premier admin est initialisé manuellement depuis la base de données PostgreSQL.

## Norme du code
### Backend
Pour la norme nous utilisons le linter officiel de [golang](https://github.com/golang/lint)

### Dashboard
Pour le dashboard, nous codons à la norme Eslint pour VueJS avec le package eslint-plugin-vue. Ce package nous permet de repérer les erreurs de syntaxe, les mauvaises utilisations des directives VueJS et les violations de Style (trop de caractère sur une ligne par exemple).

Pour plus d’informations sur les règles, voici le lien vers la [documentation](https://eslint.vuejs.org).

## Tests 
### Backend
Pour le serveur nous utilisons la librairie standard de test de golang et les github action. Lors d’un pull request les tests sont automatiquement réalisés grâce au fichier ci.yml.
Les tests sont rédigés de manière idiomatique.

### Dashboard
Pour l’application web, nous avons intégré Jest. Jest permet de faire des tests sur différent technologie JavaScript qui met l'accent sur la simplicité.

Pour plus d’informations sur [Jest](https://jestjs.io/).



## Déploiement de la solution
### Backend

![image alt text](/TD/azure.png)
Le backend de Technoservs est déployé via Github Actions sur un serveur Azure.

Le repository est configuré pour déclencher des tests unitaires après un pull request, une fois les tests validés sur la branche principale, une action effectue le transfert des fichiers vers le serveur Azure.  

Un outil (incron) exécutant des actions selon des événements du système de fichiers est configuré sur le serveur Azure afin de redémarrer automatiquement le serveur (Go) si nécessaire.
![image alt text](/TD/schema.png)  
Le fichier de configuration du déploiement continu **cd.yml** se trouve dans le dossier **.github/workflows**.  
Il déploie les fichiers via ssh sur le serveur Azure avec quatre secrets configurés dans Github (host, port, privateKey et username) :  


|                                   	|                            	|
|-----------------------------------	|----------------------------	|
| host: ${{ secrets.HOST }}         	| L’adresse du serveur Azure 	|
| username: ${{ secrets.USERNAME }} 	| le nom de l’utilisateur    	|
| key: ${{ secrets.PRIVATEKEY }}    	| la clé privée              	|
| port: ${{ secrets.PORT }}         	| le port ssh                	|

Une fois les fichiers transférés sur le serveur, **incron** vérifie si des fichiers ont été modifié et redémarre le serveur Go.  
La commande **incrontab -e** permet de spécifier le dossier à surveiller, le déclencheur et la commande ou le script à exécuter:  

**</path/folder> TRIGGER <CMD or /path/script>**

Example:  
**/home/technoservs_user/Backend/ IN_MODIFY /home/technoservs_user/startBackend.sh**  

Voir la documentation pour plus de détails: [https://doc.ubuntu-fr.org/incron](https://doc.ubuntu-fr.org/incron).  

## Dashboard

Le Front-End de Technoservs est deployé via Netlify sur le lien suivant: [technoservs.ichbinkour.eu](htpps://technoservs.ichbinkour.eu).

