import { REQUEST_BOOKS, SUCCESS_BOOKS, ADD_BOOKS, MAKE_SUB } from "../constants/bookConstants";
import axios from 'axios';

export const addBook = (data) => async (dispatch) => {
    try {
        // console.log(formdata);
        // const config = { headers: { "Content-Type": "multipart/form-data" } };
        // const { data } = await axios.post('/add_book', formdata, config);
        // console.log(data);
        dispatch({ type: ADD_BOOKS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const makeSubscribe = (id) => async (dispatch) => {
    try {
        dispatch({ type: MAKE_SUB, payload: id });
    } catch (error) {
        console.log(error);
    }
}