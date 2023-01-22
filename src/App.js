import { React, useState } from 'react'
import { Memory, Score } from './components/memory'

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
      <Memory setScore={setScore} resetScore={resetScore}/>
    </div>
  )
}

export default App
