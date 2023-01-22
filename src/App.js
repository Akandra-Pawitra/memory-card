import React from 'react'
import { Memory } from './components/memory'

const id = []
for (let i = 1; i < 10; i++) id.push('card' + i)

function App () {
  return (
    <div id='wrapper'>
      <h1 id='title'>MEMORY CARD</h1>
      <div id='score'>
        <div id='current'>Score:</div>
        <div id='highest'>Highest Score:</div>
      </div>
      <Memory list={id} />
    </div>
  )
}

export default App
