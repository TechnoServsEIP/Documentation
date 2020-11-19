import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer6() {
    const markdown = 'Notre dashboard n’est pas responsive. Nous essayons de développer une application pour bientôt.\n';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
