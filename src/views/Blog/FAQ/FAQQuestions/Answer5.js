import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function Answer5() {
    const markdown = 'Étant en BÊTA  certaines options ne sont pas encore disponibles. Nous faisons de notre mieux pour développer toute les fonctionnalités.\n';
    return (<div>
            <ReactMarkdown source={markdown}/>
        </div>
    );
}
