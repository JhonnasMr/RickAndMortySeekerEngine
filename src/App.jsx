import React, { useState, useEffect } from 'react'
import './App.css'

import Footer from './components/footer'
import useFetchApi from './hooks/useFetchApi'
import DataLocation from './components/dataLocation'
import SearchBar from './components/searchBar'
import Residents from './components/residents'
import Loader from './components/loader'
import Alert from './components/alert'
import poster from './assets/Rick_and_Morty.svg'
import video_background from './assets/video/space_backgrround.mp4'

function App() {

  const [inputText, setInputText] = useState(false)
  const [status, setStatus] = useState(false)
  const [gender, setGender] = useState(false)

  const getRandomNumber = () => {
    return String(Math.floor(Math.random() * (126 - 1 + 1)) + 1);
  }

  const locationUrl = 'https://rickandmortyapi.com/api/location/'
  let {data, isLoading, error, getData} = useFetchApi(locationUrl, inputText ? inputText : getRandomNumber())

  useEffect(() => {
    getData(locationUrl, inputText)
  },[inputText])

  return (
    <>
      <header>
        <div className="header container-flex ">
          <div className="header-svg">
            <img src={poster} alt="" />
          </div>
          <video 
            className='video__background' 
            src={video_background}
            autoPlay
            loop
            muted
            />
        </div>
      </header>
      <main className='container-grid'>

        <SearchBar setInputText={setInputText} setStatus={setStatus} setGender={setGender}/>

        {error && 
        <Alert tittle={'Error!'} color={'#e19d2c'}>
          <p>an Error ocured ☢️</p>
        </Alert>}
        {
          data ?
          <>
            <DataLocation 
              id={data.id}
              name={data.name}
              type={data.type}
              dimension={data.dimension}
              residents={data.residents}
              created={data.created}/>
            <Residents linkCharacters={data?.residents}/>
          </>
          :
          <Loader/>
        }
        {isLoading && <Loader/>}
      </main>
      <footer className='container-flex'>
        <Footer/>
      </footer>
    </>
  )
}

export default App