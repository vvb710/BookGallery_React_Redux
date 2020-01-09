import { store } from '../store/store';
import getLoading from './getLoading';

export const getResults = (query) => {

    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    store.dispatch(getLoading());

    return (dispatch) => {
        return fetch(`${BASE_URL}${query}`, { method: "GET" })
            .then(response => response.json())
            .then(json => {
                if (json.error && json.error.errors[0] && json.error.errors[0].message) {
                    dispatch({ type: "ERROR" })
                }
                else {
                    dispatch({ type: "DATA_LOADED", payload: json });
                }
            }).catch(e => console.log("error"));
    };
}