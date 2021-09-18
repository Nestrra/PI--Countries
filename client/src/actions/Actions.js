
import axios from "axios";

export const fetchCountries =  () => {

    return async function(dispatch) {

        const res = await axios.get("http://localhost:3001/countries");
        dispatch({
            type: "SET_COUNTRIES",
            payload: res.data,
        })
    }
}

export const fetchCountriesDetail =  (id) => {

    return async function(dispatch) {

        const res = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
            type: "SET_DETAIL",
            payload: res.data,
        })
    }
}


