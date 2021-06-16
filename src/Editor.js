import React from 'react'
import './Editor.css'

function Editor({ onChange, text }) {
  return (
    <textarea id='editor' type='text' onChange={onChange}>
      {text}
    </textarea>
  )
}
export default Editor
