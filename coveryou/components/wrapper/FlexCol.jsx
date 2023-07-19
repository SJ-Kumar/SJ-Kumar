import React from 'react'

const FlexCol = ({children, className}) => {
  return (
    <div className={`flex flex-col space-around ${className}`}>{children}</div>
  )
}

export default FlexCol