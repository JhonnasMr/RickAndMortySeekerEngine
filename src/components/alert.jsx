import React from 'react'
import '../assets/alert.css'

function Alert({tittle, color, children}) {
  const style = {
    borderLeft: `10px solid ${color}`,
    borderBlock: `1px solid ${color}`,
    borderRight: `1px solid ${color}`,
  }
  return (
    <div className='alert' style={style}>
        <div className="alert-head">
            <h4>{tittle}</h4> 
        </div>
        <div className="alert-body">
            {children}
        </div>
    </div>
  )
}

export default Alert