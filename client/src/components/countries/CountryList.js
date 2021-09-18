import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {fetchCountries} from '../../actions/Actions';
import {Country} from './Country'



export const CountryList = () => {

const countries = useSelector((state)=>state.getCountries.countries);
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchCountries())
},[])


    return (
        <div className = "container">
    
        {countries.map(country =>(

            <Country
            
                id={country.id}
                name={country.name}
                image={country.image}
                continent={country.continent}
                population={country.population}
                key = {country.name}
            
            
            />

        ))} 
            
            
        </div>
    )
}


