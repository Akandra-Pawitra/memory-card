import React from 'react'
import PropTypes from 'prop-types'

export function Memory (props) {
  const cards = props.list.map((card) => {
    return (
      <span key={card.toString()} id={card}>
        { card }
      </span>
    )
  })
  return (
    <div id='cards'>{cards}</div>
  )
}

Memory.propTypes = {
  list: PropTypes.array
}
