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
  const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [clicked, setClicked] = useState([])

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

  const cards = arr.map((card) => {
    return (
      <span
        key={card.toString()}
        id={card}
        onClick={getScore}
      >
        { card }
      </span>
    )
  })
  return (
    <div id='cards'>{cards}</div>
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
