import React from 'react'
import { CountryList } from './CountryList'
import { Sidebar } from '../sideBar/Sidebar'
import { Nav } from '../nav/Nav'
import './countriesScr.css'


export const CountriesScreen = () => {


    return (
        <div className="countries_content">

            <Sidebar />
            <main className="countries__main-content">
                <Nav />
                <CountryList />
            </main>
        </div>
    )
}


