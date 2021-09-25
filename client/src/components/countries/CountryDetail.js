import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountriesDetail } from '../../actions/Actions'
import { Link } from "react-router-dom";



export const CountryDetail = () => {

    const detail = useSelector((state) => state.getCountries.countryDetail)
    const dispatch = useDispatch();

    let { id } = useParams()


    useEffect(() => {

        dispatch(fetchCountriesDetail(id))

    }, [dispatch]);



    return (
        <div className="detail_container">

            <Link className="detailLink" to="/countries">Regresar al Home</Link>

            <div className="detail_card">

                <h2 key={detail.name}>{detail.name}</h2>
                <img src={detail.image} alt="" />
                <div className="info_detail">
                    <div>
                        <p className='txt'>Caracteristicas: </p>
                        <p key={detail.id}>  <span key={'1'}>Codigo pais:</span> {detail.id}</p>
                        <p key={detail.capital} ><span key={'2'}>Capital:</span> {detail.capital}</p>
                        <p key={detail.continent}><span>Continente:</span> {detail.continent}</p>
                        <p key={detail.area}> <span key={'3'}>Area:</span> {detail.area}</p>
                        <p key={detail.continent}><span>Poblacion:</span> {detail.population}</p>
                    </div>
                    <div className="activity">
                        <p className='txt'>Actividades turisticas: </p>

                        <table >

                            <tr>
                                <th >Nombre</th>
                                <th>Dificultad</th>
                                <th>Duracion</th>
                                <th>Temporada</th>

                            </tr>
                            {
                            detail.touristActivities?.map(e => (
                                <>
                                    <tr>{e.name}
                                        <td>{e.difficulty}</td>
                                        <td>{e.duration}Hrs </td>
                                        <td>{e.season}</td>
                                    
                                    </tr>

                                </>
                            ))
                        }
                        </table>

                       
                    </div>

                </div>


            </div>


        </div>
    )
}
{/* <p ><span>Nombre:</span> {e.name}</p>
<p><span>Dificultad:</span> {e.difficulty} </p>
<p><span>Duracion:</span> {e.duration} Hrs</p>
<p><span>Duracion:</span> {e.season}</p> */}
