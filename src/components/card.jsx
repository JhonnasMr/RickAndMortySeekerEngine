import React, {useEffect} from 'react'
import useFetchApi from '../hooks/useFetchApi'
import Loader from './loader'
import '../assets/card.css'

function Card({link}) {

    const {data, isLoading, error, getData} = useFetchApi(link, '')

    useEffect(() => {
        getData(link, '')
    },[link])

    const circle_color = {
      backgroundColor : `${data?.status=='Alive'?'#64ff64': data?.status=='unknown'?'#7f7f7f':'red'}`
    }

  return (
    <>
    {
      data ? 
        <div className='card'>
          <div className="card__imge">
            <div className="card-status">
              <h3 className='card__status'>{data?.status}</h3>
              <span className={`card__status-circle`} style={circle_color}></span>
            </div>
            <img src={data?.image} alt={data?.name} width={'300px'} height={'300px'}/>
            <h3>{data?.name}</h3>
          </div>
          <hr />
          <div className='card__info'>
            <div className="card__info-text"><p>Specie : {data?.species}</p></div>
            <div className="card__info-text"><p>Origin : {data?.origin?.name}</p></div>
            <div className="card__info-text"><p>Episodies where appear : {data?.episode?.length}</p></div>
          </div>
        </div>
        :
        isLoading && <Loader/>
    }
    </>
  )
}

export default Card