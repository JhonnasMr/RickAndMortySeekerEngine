import React from 'react'
import Card from './card'
import '../assets/residents.css'

function Residents({linkCharacters}) {
  
  return (
    <div id='residents' className='resident container-flex'>
      {linkCharacters.map((link, index) => {
        return <Card link={link} key={index}/>
      })}
    </div>
  )
}

export default Residents