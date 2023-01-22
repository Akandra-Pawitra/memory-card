import { React, useState } from 'react'
import { Memory, Score } from './components/memory'

const id = []
for (let i = 1; i < 10; i++) id.push('card' + i)

function App () {
  const [current, setCurrent] = useState(0)
  const [best, setBest] = useState(0)

  const setScore = () => {
    setCurrent(current + 1)
    if (current === best) {
      setBest(best + 1)
    }
  }

  const resetScore = () => {
    setCurrent(0)
  }

  return (
    <div id='wrapper'>
      <h1 id='title'>MEMORY CARD</h1>
      <Score scores={{ current, best }} />
      <Memory list={id} setScore={setScore} resetScore={resetScore}/>
    </div>
  )
}

export default App
