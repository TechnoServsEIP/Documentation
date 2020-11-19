import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer2() {
    const markdown = 'Les délais sont d’un jour ouvré, attendez un peu dans le cas contraire faites nous un ticket sur zendesk.\n';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
