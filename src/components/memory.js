import { React, useState } from 'react'
import PropTypes from 'prop-types'

function shuffle (arg) {
  const [rand, arr] = [[], arg]
  while (arr.length !== 0) {
    const e = Math.floor(Math.random() * arr.length)
    rand.push(arr[e])
    arr.splice(e, 1)
  }
  return rand
}

export function Memory (props) {
  const [clicked, setClicked] = useState([])
  const cards = ['Bear', 'Buffalo', 'Centipede',
    'Crab', 'Foxtail', 'Maiden',
    'Orchard', 'Sweet', 'Zebra'
  ]
  const arr = shuffle(cards)

  const getScore = (event) => {
    const card = event.target.id
    if (!clicked.includes(card)) {
      props.setScore()
      const arr = clicked
      arr.push(card)
      setClicked(arr)
    } else {
      setClicked([])
      props.resetScore()
    }
  }

  const span = arr.map((card) => {
    return (
      <div key={card.toString()} onClick={getScore} className='card'>
        <img src={`./cards/${card}.png`} id={card}></img>
        <p>{ card } grass</p>
      </div>
    )
  })
  return (
    <div id='card-grid'>{span}</div>
  )
}

Memory.propTypes = {
  setScore: PropTypes.func,
  resetScore: PropTypes.func
}

export function Score (props) {
  return (
    <div id='score'>
        <div id='current'>Score: {props.scores.current}</div>
        <div id='highest'>Best Score: {props.scores.best}</div>
      </div>
  )
}

Score.propTypes = {
  scores: PropTypes.object
}
