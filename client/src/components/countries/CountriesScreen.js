import React from 'react'
import {CountryList} from './CountryList'
import {Sidebar} from '../sideBar/Sidebar'
import {Nav} from '../nav/Nav'


export const CountriesScreen = () => {
    

    return (
        <div className = "countries_main-content">
            
            <Sidebar/>
        <main>
                    <Nav/> 
                    <CountryList/>
        </main>        
        </div>
    )
}


