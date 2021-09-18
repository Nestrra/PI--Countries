
const initialState = {

countries : [],
countryDetail: []

}

function getCountries(state = initialState, action ) {

switch (action.type) {
    case "SET_COUNTRIES": {

        return{
            ...state,
            countries: action.payload,
        }
    }
    
    case "SET_DETAIL":{

        return{
            ...state,
            countryDetail: action.payload

        }
    }

    default:
        return state;
}

}

export default getCountries;