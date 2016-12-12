import React, { PropTypes } from 'react'

const Link = ({ children, active, onClick }) => {
  if (active) {
    return <span>{children}</span>
  } else {
    return
    <a href='#' onclick={(e) => {
        e.preventDefault()
        onClick
      }
    }> {children} </a>
  }
}
const propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
