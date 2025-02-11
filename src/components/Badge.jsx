import React from 'react'

function Badge({shape = "square", color = "red", children = "insert text here"}) {
  return (
    <div className={`badge ${shape} ${color}`}>{children}</div>
  )
}

export default Badge