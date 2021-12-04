import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './search.css'
import { searchCountry, filterActivity } from '../../actions/Actions'

export const Search = () => {


    const [input, setInput] = useState("")
    const [inputAct, setInputAct] = useState("")
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setInput(event.target.value)
    }

    const handleChanAct = (event) => {

        setInputAct(event.target.value)

    }

    const onClickH = () => {

        dispatch(searchCountry(input));

    }



    const onClickHandAct = () => {

        setTimeout(() => {
            dispatch(filterActivity(inputAct));
        }, 200);
    }

    return (
        <div className='search__content'>

            <div className='search__input'>
                <input
                    className="search"
                    placeholder="Buscar pais..."
                    name="name"
                    onChange={handleClick}
                >

                </input>
                <button
                    className="btn_search"
                    onClick={onClickH}
                >
                    Buscar
                </button>
            </div>

            <div className="search__input">
                <input
                    className="search"
                    placeholder="Buscar actividad..."
                    name="activi"
                    onChange={(event) => handleChanAct(event)}
                >

                </input>
                <button
                    className="btn_search"
                    onClick={() => onClickHandAct()}
                >
                    Buscar
                </button>
            </div>

        </div>
    )
}


