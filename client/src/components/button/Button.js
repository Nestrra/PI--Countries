import React from 'react'
import {Link} from 'react-router-dom'

export const Button = () => {
    return (
        <div >
             <Link to="/countries">
             <button className="btn">Ingresar</button>
                </Link>
           
        </div>
    )
}
