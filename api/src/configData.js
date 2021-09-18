
const axios = require('axios');
const { Country } = require('./db')



async function insertDataCountries(req, res) {
  try {
    {
      //Hacemos la solicitud a la api
      const url = 'https://restcountries.eu/rest/v2/all'
      const resApi = await axios.get(url);
      //extreamos datos que necesitamos para llenar base de datos
      const getDataApi = resApi.data.map((e) => {

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
      });

      //llenamos la base de datos con la informacoin de la API

      getDataApi.forEach(async (e) => {
        await Country.findOrCreate({
          where: {

            id: e.id,
            name: e.name,
            image: e.image,
            continent: e.continent,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
          },
        });
      });
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { insertDataCountries }