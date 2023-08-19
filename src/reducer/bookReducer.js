import { REQUEST_BOOKS, SUCCESS_BOOKS, ADD_BOOKS, MAKE_SUB } from "../constants/bookConstants";


const bookReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case REQUEST_BOOKS:
            return {
                ...state,
                isloading: true,
            }


        case ADD_BOOKS:
            return {
                ...state,
                books: [...state.books, action.payload],
                isloading: false
            }

        case SUCCESS_BOOKS:
            const newdata = action.payload.map((obj) => {
                if (obj._id == action.payload._id) {
                    return { ...obj, status: false };
                }
                return obj;
            })
            return {
                ...state,
                books: newdata,
                isloading:false
            }


        case MAKE_SUB:
            console.log(action.payload);
            const data = state.books.map((obj) => {
                if (obj._id == action.payload) {
                    return { ...obj, status: true };
                }
                return obj;
            })
            return {
                ...state,
                books: data
            }

        default: return state;
    }
}

export default bookReducer;