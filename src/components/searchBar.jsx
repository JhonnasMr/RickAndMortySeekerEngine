import React, {useEffect, useRef, useState} from 'react'
import Alert from './alert'
import '../assets/searchBar.css'


function SearchBar({setInputText}) {

 const [view, setView] = useState(false)

 const inputRef = useRef(null)
 
 const handlerClick = (e) => {
    e.preventDefault()
    setInputText(inputRef?.current?.value)
    inputRef.current.value = ''
 }

 const validateInput = () => {

    const input = parseInt(inputRef.current.value)

    if( input > 0 && input <= 126 ){
       return setView(false)
    }
    if (inputRef.current.value === ''){
       return setView(false)
    }
    return setView(true)
 }

  return (
    <>
        <div className='searchBar'>
            <form className='input-container' onSubmit={(e) => handlerClick(e)}>
                <input 
                    className='input'
                    onChange={validateInput} 
                    type="text"
                    name='text'
                    ref={inputRef}
                    placeholder='Search an ID'
                />
                <div className="top-line"></div>
                <div className="under-line"></div>
            </form>
            {view && 
                <Alert tittle={'Ups!'} color={'red'}>
                    <p>Only a numeric ID from 1 to 126 is possible. (*/ω＼*)</p>
                </Alert>
            }
        </div>
    </>
  )
}

export default SearchBar