import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContinente, fetchCountries, orderAz, orderZa, orderPopulationAsc, orderPopulationDes } from '../../actions/Actions'
import { Link } from "react-router-dom";


export const Sidebar = () => {
    const {countries} = useSelector((state) => state.getCountries);
    console.log('actividades',countries.touristActivities)
    console.log(countries)
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

    }, [continent]);


    const handleSelect = ({ target }) => {

        setContinent(target.value)

    }

    return (
        <div>
            <aside className="countries__main-sidebar">
                <Link className="icon_sidebar" to="/countries"><h2>PI <br /> COUNTRIES</h2></Link>
                <div className="title">
                    <p >Filtrar por continente</p>
                </div>
                <div className="select_sidebar">
                    <select
                        onChange={handleSelect}

                    >
                    
                        <option value="todos">Todos</option>
                        <option value="Asia">Asia</option>
                        <option value="Americas">Americas</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>

                    </select>
                </div>
            

                <hr></hr>
                <div className="title">
                    <p>Ordenar Por nombre:</p>
                </div>
                <div className="select_sidebar">
                    <button className="mt-5" onClick={handleOrderAz}>A-Z</button>
                </div>
                <div className="select_sidebar">
                    <button className="mt-5" onClick={handleOrderZa} >Z-A</button>
                </div>
                <div className="title">
                    <p>Ordenar Por poblacion:</p>
                </div>
                <div className="select_sidebar">
                    <button onClick={handleOrderPopAsc} className="mt-5" >↑ - ↓</button>
                </div>
                <div className="select_sidebar">
                    <button onClick={handleOrderPopDes} className="mt-5">↓ - ↑</button>
                </div>

            </aside>
        </div>
    )
}

