import React, { useRef, useState } from 'react'
import '../assets/searchBar.css'
import Alert from './alert'


function SearchBar({setInputText, setGender, setStatus}) {

 const [view, setView] = useState(false)
 const [checkGender, setCheckGender] = useState(false)
 const [checkStatus, setCheckStatus] = useState(false)

 const inputRef = useRef(null)
 
 const handlerClick = (e) => {
    e.preventDefault()
    if(inputRef?.current?.value?.includes('?')){
        return '😡'
    }
    setInputText(inputRef?.current?.value?.trim())
    setGender(checkGender)
    setStatus(checkStatus)
    inputRef.current.value = ''
 }

 const validateInput = () => {

    const input = inputRef.current.value
    
    if( parseInt(input) > 126 || parseInt(input) < 0 ) return setView(true)
    if( input === '') return setView(false)
    if( !parseInt(input) == !NaN) return setView(true)
    return setView(false)
}

  return (
    <>
        <div className='searchBar'>
            <form className='input-container container-flex' onSubmit={(e) => handlerClick(e)}>
                <input 
                    className='input'
                    onChange={validateInput} 
                    type="text"
                    name='text'
                    ref={inputRef}
                    placeholder='Search an ID'
                />
                <div className="top-line"></div>
                <button className='search-button'>
                    <a href="#residents">
                        <box-icon color='#697565' name='search'></box-icon>
                    </a>
                </button>
            </form>
            {/* <details className='filter'>
                <summary className='filter-summary'>
                    <box-icon  className='filter-button'
                        color='#697565' 
                        name='filter'>
                    </box-icon> <span><h4>Filter</h4></span>
                </summary>
                <div className='options__list'>
                    <strong>Status</strong>
                    <ul className='status__list option__list'>
                        <li className="option">
                            <input type='checkbox' id={'alive'}/>
                            <label htmlFor="alive">Alive</label>
                        </li>
                        <li className="option">
                            <input type='checkbox' id={'dead'}/>
                            <label htmlFor="dead">Dead</label>
                        </li>
                        <li className="option">
                            <input type='checkbox' id={'unknown'}/>
                            <label htmlFor="unknown">Unknown</label>
                        </li>
                    </ul>
                    <strong>Gender</strong>
                    <ul className='gender__list option__list'>
                        <li className="option">
                            <input type='checkbox' id={'female'}/>
                            <label htmlFor="Female">Female</label> 
                        </li>
                        <li className="option">
                            <input type='checkbox' id={'male'}/>
                            <label htmlFor="Male">Male</label>
                        </li>
                        <li className="option">
                            <input type='checkbox' id={'genderless'}/>
                            <label htmlFor="genderless">Genderless</label>
                        </li>
                        <li className="option">
                            <input type='checkbox' id={'unknown'}/>
                            <label htmlFor="unknown">Unknown</label>
                        </li>
                    </ul>
                </div>
            </details> */}
            {view &&
            <Alert tittle={'Ups!'} color={'red'}>
                <p>Only a numeric ID from 1 to 126 is possible. (*/ω＼*)</p>
            </Alert>}
        </div>
    </>
  )
}

export default SearchBar