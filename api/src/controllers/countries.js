const {Country, TouristActivity} = require('../db')
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


const getAllCountries  = async (req, res) => {

    const {name} = req.query;
    console.log(name)

    try {
    
        if(!name){
            const countries = await Country.findAll({
                include: TouristActivity,
            });
            res.status(200).json(countries)

        }else{

            const countriesN = await Country.findAll({
            
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: TouristActivity,
                });
            console.log(countriesN)

            if(!countriesN[0]){
            
                res.status(404).send('No hay paises relacionados con el parametro de busqueda')


            }

            res.status(200).json(countriesN)

        }

    } catch (error) {
        res.send(error)
    }

}

const getCountryId = async (req, res)=>{

    const idCountry = req.params.idCountry.toUpperCase();
        console.log(idCountry);

    const country = await Country.findOne({ 
        where:{
            id:idCountry
        },
        include: TouristActivity,
    })

    res.json(country);

}


module.exports ={ 

    getAllCountries,
    getCountryId,

}


