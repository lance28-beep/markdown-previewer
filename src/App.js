import React, { useState } from 'react'
import Editor from './Editor'
import './App.css'
import marked from 'marked'

marked.setOptions({
  breaks: true,
})

function App() {
  // a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
  const initialState = `# Lance Valle
  ## FreeCodeCamp Project
  **current knowledge**
  > Block Quotes!
  - HTML
  - CSS
  - JavaScript
  - React.js
  - Redux
  [Visit my Facebook](https://www.facebook.com/mr.c0oletz)
  This is a inline \`<div></div>\`
  This is a block of code
  \`\`\`
     let x = 'previous'
     let y = 'reason'
     let now = x + y
  \`\`\`
  ![REACT](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_large.svg)
  `
  const [text, setText] = useState(initialState)
  const markdown = marked(text)
  return (
    <div className='App'>
      <div className='container'>
        <div className='container___editor'>
          <Editor onChange={(e) => setText(e.target.value)} text={text} />
        </div>
        <div className='container___preview'>
          <div
            dangerouslySetInnerHTML={{
              __html: markdown,
            }}
            id='preview'
          />
        </div>
      </div>
    </div>
  )
}

export default App
