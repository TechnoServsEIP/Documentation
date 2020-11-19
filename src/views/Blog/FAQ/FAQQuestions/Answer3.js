import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer3() {
    const markdown = 'Étant en beta l’option n’est pas encore disponible, veuillez alors nous faire un ticket sous zendesk en précisant “mot de passe oublié” dans votre demande.\n';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
