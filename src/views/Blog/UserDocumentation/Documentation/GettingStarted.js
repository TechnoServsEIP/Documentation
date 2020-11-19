import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

export default function GettingStarted() {
    const markdown = '# Hello, *world*!';
    return(<div>
            <ReactMarkdown source={markdown} />
        </div>
    );
}
