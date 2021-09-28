const {TouristActivity, Country} = require('../db')



const createActivity = async (req, res)=>{

    const {name, difficulty, duration, season, countryId} = req.body
   
    try {
        
    const activity = await TouristActivity.create({  

        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,       
        
    });

    
        let country = await Country.findAll({ 
            where:{
                id: countryId
            }
        })
        
        activity.addCountry(country)
    
    res.send(activity);
    

    } catch (error) {
        res.send(error)
    } 
}


module.exports ={ 
    createActivity,   
}

