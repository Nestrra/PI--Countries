const {TouristActivity} = require('../db')
//const { Sequelize } = require("sequelize");


const createActivity = async (req, res)=>{

    const {name, difficulty, duration, season} = req.body
   
    try {
        
    const activity = await TouristActivity.create({  

        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,         
        
    });
    res.json(activity);
 
    } catch (error) {
        res.send(error)
    } 
}


module.exports ={ 
    createActivity,   
}

