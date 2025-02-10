import React from 'react'

function Badge({shape, color, children}) {
  return (
    <div className={`badge ${shape} ${color}`}>{children}</div>
  )
}

export default Badge