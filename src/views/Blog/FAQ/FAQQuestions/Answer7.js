import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer7() {
    const markdown = 'Étant en BÊTA, cette option est prévue très prochainement.';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
