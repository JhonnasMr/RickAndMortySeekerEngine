import React from 'react'
import '../assets/dataLocation.css'

function DataLocation({id, name, type, dimension, residents, created}) {
  return (
    <div key={id} className='location'>
        <h2 className='location-tittle'>{name}</h2>
        <div className='container-flex location-data'>
            <div className="location__data-container">
                <p className='location-text'>Type :</p> <p>{type}</p>
            </div>
            <div className="location__data-container">
                <p className='location-text'>Dimension:</p> <p>{dimension}</p>
            </div>
            <div className="location__data-container">
                <p className='location-text'>Residents :</p> <p>{residents.length}</p>
            </div>
        </div>
        <div className='location__date' >
            <p>{created.split('T')[0]}</p>
        </div>
    </div>
  )
}

export default DataLocation