import React from 'react'


import {CountryList} from './CountryList'
import {Sidebar} from '../sideBar/Sidebar'


export const CountriesScreen = () => {
    

    return (
        <div className = "countries_main-content">
            
            <Sidebar/>
          <main>
                    
                    <CountryList/>
           </main>        
        </div>
    )
}


