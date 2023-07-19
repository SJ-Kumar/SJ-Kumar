import React from 'react'

const FlexRow = ({children, className}) => {
  return (
    <div className={`flex flex-row space-around items-center ${className}`}>{children}</div>
  )
}

export default FlexRow