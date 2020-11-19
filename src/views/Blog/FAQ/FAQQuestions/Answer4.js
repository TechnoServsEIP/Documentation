import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer4() {
    const markdown = 'Pour notre BÊTA Test, nous avons créé un discord auquel vous pouvez signaler tout problème.\n' +
        'Dans le channel bug-report, vous pouvez nous envoyer un screenshot avec un commentaire.\n';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
