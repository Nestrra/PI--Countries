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

    for(c of countryId){
        let country = await Country.findByPk(c)
        console.log(country)
        activity.addCountry(country)
    }
    res.send(activity);
    console.log(activity)
 
    } catch (error) {
        res.send(error)
    } 
}


module.exports ={ 
    createActivity,   
}

