import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'


export default function Answer1() {
        const markdown = 'Vérifiez tout d\'abord que vous avez bien un compte chez nous, dans le cas contraire référez vous à la section “création du compte”.\n' +
            'Que vous avez bien votre mot de passe et adresse email utilisé lors de la création de votre compte.\n' +
            '\n';
        return (<div>
                <ReactMarkdown source={markdown}/>
            </div>
        );
    }
