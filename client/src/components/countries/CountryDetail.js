import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchCountriesDetail} from '../../actions/Actions'



export const CountryDetail = () => {

const detail = useSelector((state)=> state.getCountries.countryDetail)
const dispatch = useDispatch();

let {id} = useParams()

useEffect(() => {

    dispatch(fetchCountriesDetail(id))
 
}, [id]);

console.log(detail)

    return (
        <div>
           <h1>{detail.name}</h1>
           
        </div>
    )
}
