import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import './sidebar.css'
import { filterContinente, fetchCountries, orderAz, orderZa, orderPopulationAsc, orderPopulationDes } from '../../actions/Actions'



export const Sidebar = () => {
  
    const [continent, setContinent] = useState(" ");


    const dispatch = useDispatch()

    const handleOrderAz = () => {

        dispatch(orderAz())

    }
    const handleOrderPopAsc = () => {

        dispatch(orderPopulationAsc())

    }
    const handleOrderPopDes = () => {

        dispatch(orderPopulationDes())

    }

    const handleOrderZa = () => {

        dispatch(orderZa())

    }

    useEffect(() => {
        if (continent === 'todos') {
            dispatch(fetchCountries())
        } else {
            dispatch(filterContinente(continent))
        }

    }, [continent, dispatch]);


    const handleSelect = ({ target }) => {

        setContinent(target.value)

    }

    return (
        <>
            <aside className="countries__main-sidebar">
                <a  className="icon_sidebar" href="/countries"><h2>PI <br /> COUNTRIES</h2></a>
                <div className="">
                    <p className='title' >Filtrar por continente</p>
                </div>
                <div className="ñ">
                    <select className="select_sidebar"
                        onChange={handleSelect} >

                        <option value="todos">Todos</option>
                        <option value="Asia">Asia</option>
                        <option value="Americas">Americas</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Polar">Polar</option>

                    </select>
                </div>
                <hr></hr>
                <div className="">
                    <p className='title'>Ordenar Por nombre:</p>
                </div>
                <div className="ñ">
                    <button className="btn" onClick={handleOrderAz}>A-Z</button>
                </div>
                <div className="ñ">
                    <button className="btn" onClick={handleOrderZa} >Z-A</button>
                </div>
                <div className="">
                    <p className='title'>Ordenar Por poblacion:</p>
                </div>
                <div className="ñ">
                    <button onClick={handleOrderPopAsc} className="btn" >↑ - ↓</button>
                </div>
                <div className="ñ">
                    <button onClick={handleOrderPopDes} className="btn">↓ - ↑</button>
                </div>

            </aside>
        </>
    )
}

