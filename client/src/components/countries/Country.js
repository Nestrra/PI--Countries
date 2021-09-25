import React from 'react';
import {Link} from 'react-router-dom'


export const Country = ({name, image, id, continent, population }) => {


        return (
            <div>
                <Link className="link" to={`/country/${id}`}>
                <div className="card">
                    <div className="flaf">
                        <img className="" alt="" src={image}/>
                    </div>
                    <div className="info">
                            <h2 className="name">{name}</h2>
                        <div className="content">
                            <p className="text"><span className="span">Codigo pais: </span>  {id}</p>                        
                            <p className="text"><span className="span">Continente:</span>  {continent}</p>
                        </div>                    
                    </div>
                </div>
                
                </Link>
            </div>
        )
    }
