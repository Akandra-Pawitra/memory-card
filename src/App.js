import React from 'react'
import { Memory } from './components/memory'

function App () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Memory list={arr} />
  )
}

export default App
