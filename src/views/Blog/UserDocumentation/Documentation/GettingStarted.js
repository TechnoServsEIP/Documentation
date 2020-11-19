import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function GettingStarted() {
    const markdown = '+++\n' +
        'title = "User Documentation"\n' +
        'date = "2020-08-16"\n' +
        'author = "TechnoServs Team"\n' +
        '+++\n' +
        '\n' +
        '## Resumé\n' +
        '\n' +
        'Ce document a pour but d’établir un guide de l’utilisateur qui permettrait à toute personne d’utiliser notre solution.\n' +
        '\n' +
        'TechnoServs est une solution de hosting de serveurs de jeux vidéos dans le cloud, avec des offres à la demande pour chacun, en simplifiant chaques étapes du processus.\n' +
        '\n' +
        'Afin de mieux comprendre les fonctionnalités mises en place, nous avons créé un schéma fonctionnel simple. (voir Schéma fonctionnel)\n' +
        '\n' +
        'Pour accéder à notre plateforme, veuillez-vous rendre sur la partie accéder à la plateforme.\n' +
        '\n' +
        'Pour toute aide sur la gestion des serveurs de jeux, vous retrouverez le guide sur la section serveur de jeux.\n' +
        '\n' +
        'Pour toutes autres questions, rendez-vous sur notre FAQ.\\\n' +
        '\\\n' +
        '\\\n' +
        '\\\n' +
        '\\\n' +
        '## Schéma fonctionnel\n' +
        '\n' +
        '![image alt text](/UD/SchémaFonctionnel.png)\n' +
        'Ici nous avons un schéma fonctionnel de ce que vous pouvez réaliser sur notre plateforme.\n' +
        '\n' +
        '## Accès\n' +
        '\n' +
        'Afin d\'accéder à notre site web, veuillez-vous rendre sur le navigateur internet de votre choix (ex. Google Chrome, FireFox, Safari…), et commencez à taper [technoservs.ichbinkour.eu](technoservs.ichbinkour.eu).\n' +
        '\n' +
        'Toutefois si vous n\'avez pas accès c’est surement car vous n’avez pas encore de compte chez TechnoServs, si c’est le cas veuillez vous référer à la section suivante “création du compte”, sinon essayer de nous faire un ticket zendesk en nous expliquant votre problème et nous vous répondrons dans les plus brefs délais.\n' +
        '\n' +
        '## Création du compte\n' +
        '\n' +
        'Afin de vous créer un compte sur notre plateforme, vous devez vous rendre sur la page “/auth/register” qui devrait ressembler à ça:\n' +
        '\n' +
        '![image alt text](/UD/register.png)\n' +
        'Il vous suffit juste d’entrer votre mail dans les deux premiers champs ainsi que votre mot de passe dans les deux derniers (en faisant bien attention que le mail et le mot de passe soit identique), après quoi il ne reste plus qu’à appuyer sur le bouton “register” présent en bas de la page.\n' +
        '\n' +
        'Une fois fait, vous devriez recevoir un mail semblable sur la boîte mail que vous avez renseigné (voir ci-dessous):\n' +
        '![image alt text](/UD/mail.png)\n' +
        'Il vous manque juste à cliquer sur le texte en bleu “here” pour confirmer votre adresse mail, suite à quoi vous devriez être redirigé sur le site web ou alors référez-vous à la prochaine section “se connecter à son compte”.\n' +
        '\n' +
        '## Se connecter à son compte\n' +
        '\n' +
        'Si vous souhaitez vous connecter à votre compte TechnoServs, munissez-vous de votre adresse mail et de votre mot de passe que vous aviez utilisé lors de la création de votre compte chez TechnoServs.\n' +
        'Si vous n’en n’avez pas merci de vous référer à la section précédente “création du compte”.\n' +
        'Pour vous identifier veuillez vous rendre sur “/auth/login”, dont la page devrait ressembler à ceci:\n' +
        '![image alt text](/UD/login.png)\n' +
        'Vous n’avez alors plus qu’à entrer dans le premier champ votre adresse mail, et dans le deuxième votre mot de passe. Veuillez bien faire attention toutefois que ce soient les informations que vous avez entré précédemment lors de la création de votre compte.\n' +
        '\n' +
        '## Créer un serveur de jeux\n' +
        '\n' +
        'Afin de créer son serveur de jeux, rien de plus simple, il vous suffit de vous rendre sur la page d\'accueille “/app”.\n' +
        'Elle devrait ressembler à ceci:\n' +
        '![image alt text](/UD/instances.png)\n' +
        'Vous pouvez constater qu’il y a un bouton “new instance”, il vous suffit de cliquer dessus et vous devriez être redirigé vers une nouvelle page.\n' +
        '![image alt text](/UD/create1.png)\n' +
        'C’est la première page afin de créer votre serveur de jeux, vous y voyez un champ, dans celui-ci vous devez y entrer le nom que vous souhaitez donner à votre serveur (vous pourrez toujours le modifier plus tard dans les option).\n' +
        'Une fois votre nom de serveur choisi, cliquez sur le bouton “suivant”, vous pouvez alors passer à la section suivante “Sélectionner son jeux”\n' +
        '\n' +
        '### Sélectionner son jeux\n' +
        '\n' +
        'Vérifiez tout d’abord que vous êtes bien sur cette page ci (attention les jeux peuvent varier) :\n' +
        '![image alt text](/UD/create2.png)\n' +
        'Si ce n’est pas le cas, merci de voir la section précédente “créer son serveur de jeux”.\n' +
        'Si c’est bien la même page (attention encore la liste des jeux disponibles ne sera pas forcément identique), il vous suffit alors à cliquer sur le jeu souhaité et cliquer sur le bouton “suivant”.\n' +
        '\n' +
        '### Sélectionner son offre\n' +
        'Vérifiez tout d’abord que vous êtes bien sur cette page ci (attention les différentes offres peuvent varier) :\n' +
        '![image alt text](/UD/create3.png)\n' +
        'Si ce n’est pas le cas, merci de voir la section précédente “Sélectionner son jeux”.\n' +
        'Si c’est bien la même page (attention encore les différentes offres disponibles ne seront pas forcément identiques), vous avez accès à l\'ensemble de nos offres pour le jeu que vous avez sélectionné précédemment.\n' +
        'Prenez votre temps pour choisir l’offre la plus adaptée à votre façon de jouer ou vos objectifs.\n' +
        'Une fois la décision prise vous avez juste à cliquer sur l’offre ou le bouton “sélectionner” de l’offre qui vous correspond, puis de cliquer sur “continue”.\n' +
        '![image alt text](/UD/create4.png)\n' +
        'Vous devriez alors avoir un résumé de votre serveur comme la photo ci-dessus, appuyez seulement sur “start server”, et votre serveur devrait être alors opérationnel.\n' +
        'Vous allez alors être redirigé sur la page principale et devriez constater un élément portant le nom que vous lui avez attribué précédemment un peu comme ceci:\n' +
        '![image alt text](/UD/servInfo.png)\n' +
        '\n' +
        '## Manager ses serveurs\n' +
        '\n' +
        '\n' +
        '### Supprimer un serveur\n' +
        '\n' +
        'Une fois sur le menu principale cliquez sur le serveur que vous souhaitez modifier vous aurez alors une page similaire qui devrait s’afficher:\n' +
        '![image alt text](/UD/servInfo.png)\n' +
        'Appuyez alors sur “delete” et confirmez bien que vous voulez le supprimer (attention toute suppression est définitive).\n' +
        '\n' +
        '# FAQ\n' +
        '### Je n’arrive pas à avoir accès à mon compte.\n' +
        'Vérifiez tout d\'abord que vous avez bien un compte chez nous, dans le cas contraire référez vous à la section “création du compte”.\n' +
        'Que vous avez bien votre mot de passe et adresse email utilisé lors de la création de votre compte.\n' +
        '\n' +
        '### Je n’ai pas reçu le mail de confirmation.\n' +
        'Les délais sont d’un jour ouvré, attendez un peu dans le cas contraire faites nous un ticket sur zendesk.\n' +
        '\n' +
        '### J’ai oublié mon mot de passe.\n' +
        'Étant en beta l’option n’est pas encore disponible, veuillez alors nous faire un ticket sous zendesk en précisant “mot de passe oublié” dans votre demande.\n' +
        '\n' +
        '### Où puis-je signaler un bug ?\n' +
        'Pour notre BÊTA Test, nous avons créé un discord auquel vous pouvez signaler tout problème.\n' +
        'Dans le channel bug-report, vous pouvez nous envoyer un screenshot avec un commentaire.\n' +
        '\n' +
        '### Certains onglets ne fonctionnent pas dans le dashboard.\n' +
        'Étant en BÊTA  certaines options ne sont pas encore disponibles. Nous faisons de notre mieux pour développer toute les fonctionnalités.\n' +
        '\n' +
        '### Lorsque je suis sur téléphone, le site ne fonctionne pas.\n' +
        'Notre dashboard n’est pas responsive. Nous essayons de développer une application pour bientôt.\n' +
        '\n' +
        '### Les ressources utilisées du serveur ne semblent pas être correctes.\n' +
        'Étant en BÊTA, cette option est prévue très prochainement.';
    return(<div>
            <ReactMarkdown source={markdown} />
        </div>
    );
}
