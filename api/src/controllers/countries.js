const { Country, TouristActivity } = require('../db')
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


const getAllCountries = async (req, res) => {

    const { name } = req.query;


    try {

        if (!name) {
            const countries = await Country.findAll({
                include: TouristActivity,
            });
            res.status(200).json(countries)

        } else {

            const countriesN = await Country.findAll({

                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: TouristActivity,
            });


            if (!countriesN[0]) {

                res.send('No hay paises relacionados con el parametro de busqueda')


            }

            res.status(200).json(countriesN)

        }

    } catch (error) {
        console.error(error);
    }

}

const getCountryId = async (req, res) => {


    try {

        const idCountry = req.params.idCountry.toUpperCase();


        const country = await Country.findOne({
            where: {
                id: idCountry
            },
            include: TouristActivity,
        })
        
        res.json(country);

    } catch (error) {
        
        console.error(error);

    }  

}


module.exports = {

    getAllCountries,
    getCountryId,

}


