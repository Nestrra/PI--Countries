import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountriesDetail } from '../../actions/Actions'
import { Link } from "react-router-dom";



export const CountryDetail = () => {
    const [loading, setLoading] = useState(true)
    const { countryDetail } = useSelector((state) => state.getCountries)
    const dispatch = useDispatch();

    let { id } = useParams()


    useEffect(() => {

        dispatch(fetchCountriesDetail(id))
        setTimeout(() => { setLoading(false) }, 500)
    }, [id]);



    return (
        <div className="detail_container">
            {loading ? (
                <div className="load">

                </div>
            ) :
                (
                    <>
                        <Link className="detailLink" to="/countries">Regresar al Home</Link>
                        <div className="detail_card">

                            <h2 key={countryDetail.id}>{countryDetail.name}</h2>
                            <img src={countryDetail.image} alt="" />
                            <div className="info_detail">
                                <div>
                                    <h2 className='txt'>Caracteristicas: </h2>
                                    <p><span >Codigo pais:</span> {countryDetail.id}</p>
                                    <p><span >Capital:</span> {countryDetail.capital}</p>
                                    <p><span>Continente:</span> {countryDetail.continent}</p>
                                    <p><span>Area:</span> {countryDetail.area}</p>
                                    <p><span>Poblacion:</span> {countryDetail.population}</p>
                                </div>
                                <div className="activity">
                                    <h2 className='txt'>Actividades turisticas: </h2>
                                    <table >
                                        <thead>
                                            <tr>
                                                <th >Nombre</th>
                                                <th>Dificultad</th>
                                                <th>Duracion</th>
                                                <th>Temporada</th>
                                            </tr>
                                        </thead>
                                        {
                                            countryDetail.touristActivities?.map(e => (
                                                <tbody key={e.id}>
                                                    <tr>
                                                        <td>{e.name}</td>
                                                        <td>{e.difficulty}</td>
                                                        <td>{e.duration}Hrs </td>
                                                        <td>{e.season}</td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }





        </div>
    )
}
{/* <p ><span>Nombre:</span> {e.name}</p>
<p><span>Dificultad:</span> {e.difficulty} </p>
<p><span>Duracion:</span> {e.duration} Hrs</p>
<p><span>Duracion:</span> {e.season}</p> */}
