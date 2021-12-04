const countries = require('./countries.json')
const axios = require('axios');
const { Country } = require('./db');
const e = require('express');



async function insertDataCountries() {
  try {
    {
      // //Hacemos la solicitud a la api
       const url = 'https://restcountries.com/v3/all'
       const resApi = await axios.get(url);
      
      // //extraemos datos que necesitamos para llenar base de datos
       const getDataApi = resApi.data.map((e) => {
     // const countriesA =  countries.map(e =>{
        
                    
          return {

          id: e.cca3,
          name: e.name.common ? e.name.common : 'sin nombre',
          image: e.flags.find((e)=>e.includes('svg')),
          continent: e.continents ? e.continents[0] : 'sin continent',
          capital: e.capital ? e.capital[0] : 'sin capital',
          subregion: e.subregion,
          area: Math.floor(e.area),
          population:  Math.floor (e.population),


        };
      }
      
      )   
     
        for(const c of getDataApi ){


              await Country.create(c)
        }
    
    }
  } catch (error) {
  
  }
}

module.exports = { insertDataCountries }