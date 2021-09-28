const countries = require('./countries.json')
const axios = require('axios');
const { Country } = require('./db');
const e = require('express');



async function insertDataCountries() {
  try {
    {
      // //Hacemos la solicitud a la api
      // const url = 'https://restcountries.com/v2/all'
      // const resApi = await axios.get(url);
    
      // //extraemos datos que necesitamos para llenar base de datos
      // const getDataApi = resApi.data.map((e) => {
      const countriesA =  countries.map(e =>{
          
                    
          return {

          id: e.alpha3Code,
          name: e.name,
          image: e.flag,
          continent: e.region,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,

        };
      }
      
      )   

      
        for(const c of countriesA ){

              await Country.create(c)


        }
    
    }
  } catch (error) {
  
  }
}

module.exports = { insertDataCountries }