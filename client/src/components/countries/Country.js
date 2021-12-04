import React from 'react';
import {Link} from 'react-router-dom'
import './country.css'


export const Country = ({name, image, id, continent }) => {


        return (
            <>
                <Link className="link" to={`/country/${id}`}>
                <div className="card">
                    <div className='img'>
                    <img src={image} alt=""/>
                    </div>
               
                <div className='card-producto'>
                    <h3>{name}</h3>
                    <p>Continente: <span>{continent}</span></p>
                
                </div>
                </div>
                
                </Link>
            </>
        )
    }
