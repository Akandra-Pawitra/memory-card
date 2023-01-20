import React from 'react'
import PropTypes from 'prop-types'

export function Memory (props) {
  const cards = props.list.map((card) => {
    return (
      <div key={card.toString()} id={card}>
        { card }
      </div>
    )
  })
  return (
    <div>{cards}</div>
  )
}

Memory.propTypes = {
  list: PropTypes.array
}
