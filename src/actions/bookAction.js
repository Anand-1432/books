import { REQUEST_BOOKS, SUCCESS_BOOKS, ADD_BOOKS, MAKE_SUB } from "../constants/bookConstants";
import axios from 'axios';

export const addBook = (bookdata, redirect) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_BOOKS });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('https://bookbakend3.onrender.com/add_book', bookdata, config);
        dispatch({ type: ADD_BOOKS, payload: data.data });
        redirect();
    } catch (error) {
        console.log(error);
    }
}

export const getBook = () => async (dispatch) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.get('https://bookbakend3.onrender.com/get_book', config);
        dispatch({ type: SUCCESS_BOOKS, payload: data });
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