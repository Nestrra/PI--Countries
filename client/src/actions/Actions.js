
import axios from "axios";

export const fetchCountries = () => {

    return async function (dispatch) {

        const res = await axios.get("http://localhost:3001/countries");
        dispatch({
            type: "SET_COUNTRIES",
            payload: res.data,
        })
    }
}

export const fetchCountriesDetail = (id) => {

    return async function (dispatch) {

        try {
            const res = await axios.get(`http://localhost:3001/countries/${id}`);
            dispatch({
                type: "SET_DETAIL",
                payload: res.data,
            })
        } catch (error) {

        }
    }
}


export const searchCountry = (countryName) => {

    return async function (dispatch) {

        try {
            const res = await axios.get(`http://localhost:3001/countries?name=${countryName}`);
            dispatch({
                type: "SEARCH_COUNTRY",
                payload: res.data,
            })
 
        } catch (error) {
            

        }

    }
}

export const filterContinente = (payload) => {

    return {
        type: "FILTER_CONTINENT",
        payload
    }

}

export const filterActivity = (payload) => {

    return {
        type: "FILTER_ACTIVITY",
        payload
    }

}


export const orderAz = (payload) => {

    return {
        type: "ORDER_AZ",
        payload
    }


}


export const orderZa = (payload) => {

    return {
        type: "ORDER_ZA",
        payload
    }

}



export const orderPopulationAsc = (payload) => {

    return {
        type: "ORDER_POPASC",
        payload
    }

}

export const orderPopulationDes = (payload) => {

    return {
        type: "ORDER_POPDES",
        payload
    }
}









