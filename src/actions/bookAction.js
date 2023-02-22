import { REQUEST_BOOKS, SUCCESS_BOOKS, ADD_BOOKS, MAKE_SUB } from "../constants/bookConstants";
import axios from 'axios';

export const addBook = (bookData) => async (dispatch) => {
    try {
        console.log(bookData);
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('/add_book', bookData, config);
        console.log(data);
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