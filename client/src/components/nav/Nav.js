import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { Search } from '../search/Search'


export const Nav = () => {
    return (
        <div className='nav-bar'>
            
                <Search/>
            

            <Link className="link" to='/activity/'>
                <button className="btn-CreateA">Crear Actividad</button>
            </Link>
        </div>
    )
}
