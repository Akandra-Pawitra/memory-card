import { React, useState } from 'react'
import PropTypes from 'prop-types'

export function Memory (props) {
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

  const cards = props.list.map((card) => {
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
  list: PropTypes.array,
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
