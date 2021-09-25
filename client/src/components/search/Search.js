import React, { useState} from 'react';
import {useDispatch } from 'react-redux';
import {searchCountry} from '../../actions/Actions'

export const Search = () => {

const [input, setInput] = useState("")
const dispatch = useDispatch();

const handleClick = (event)=>{

    setInput(event.target.value)

}

const onClickH = ()=>{

    dispatch(searchCountry(input));

}

    return (
        <div>
            <input 
                className="search"
                placeholder="Buscar pais..."
                name="name"
                onChange={(event) => handleClick(event)}
            >

            </input>
            <button 
                className="btn_search"
                onClick = {()=>onClickH()}
                > 
                    Buscar
            </button>
        </div>
    )
}


