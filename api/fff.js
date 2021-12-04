// const getApiCountries = async () => {
//     const countries = await Country.findAll({
//         attributes: ["id", "name", "image", "region", "capital", "subregion", "area", "population"],
//     });
//     if (!countries.length) {
//         var allCountry = await axios.get("https://restcountries.com/v3/all");
//         allCountry = allCountry.data
//         allCountry = allCountry.map((el) => {

//             return {
//                 id: el.cca3,
//                 name: el.name.common,
//                 image: el.flags.find((e) => e.includes('svg')),
//                 region: el.region,
//                 capital: el.capital,
//                 subregion: el.subregion,
//                 area: el.area,
//                 population: el.population,
//             }
//         });
//         await Country.bulkCreate(allCountry);
//         return allCountry;
//     } else {
//         return countries
//     }
// };
