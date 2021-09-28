
const initialState = {

    countries: [],
    countryDetail: [],
    countriesBack: [],


}

function getCountries(state = initialState, action) {

    switch (action.type) {
        case "SET_COUNTRIES": {

            return {
                ...state,
                countries: action.payload,
                countriesBack: action.payload,
            }
        }

        case "SET_DETAIL": {

            return {
                ...state,
                countryDetail: action.payload

            }
        }

        case "SEARCH_COUNTRY": {

            return {
                ...state,
                countries: action.payload
            }

        }
        case "FILTER_CONTINENT": {

        state.countries = state.countriesBack

            return {
                ...state,
                countries: state.countries.filter((c) => c.continent === action.payload)

            }
        }
        case "FILTER_ACTIVITY": {
        
            return {
                ...state,
                countries: state.countries.filter((c)=>{return c.touristActivities.some((a)=> a.name === action.payload)})
            }
        }
        
        case "ORDER_AZ": {
        
            return {
                ...state,
                countries:  state.countries.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                })
            }
        }
        case "ORDER_ZA": {
        
            return {
                ...state,
                countries: state.countries.sort((b,a)=>{
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;

                })
            }
        }
        case "ORDER_POPASC": {
        
            return {
                ...state,
                countries: state.countries.sort(function (b, a) {
                    if (a.population > b.population) return 1;
                    if (a.population < b.population) return -1;
                })
            }
        }
        case "ORDER_POPDES": {
        
            return {
                ...state,
                countries: state.countries.sort(function (a, b) {
                    if (a.population > b.population) return 1;
                    if (a.population < b.population) return -1;
                })
            }
        }

        default:
            return state;
    }

}

export default getCountries;

