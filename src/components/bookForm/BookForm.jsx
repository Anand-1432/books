import React, { useState } from 'react'
import './bookForm.scss'

import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addBook } from '../../actions/bookAction';
import axios from 'axios';

const BookForm = ({ redirect }) => {

    const [bookData, setBookData] = useState({
        id: "",
        name: "",
        publisher: "",
        version: "",
        isbn: "",
        pages: "",
        price: "",
        image: "",
        status: false
    });


    const [loading, setLoading] = useState(false);



    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    }


    const handleImage = (e) => {
        setLoading(true);
        const data = new FormData();
        console.log(e.target.files[0]);
        data.append("file", e.target.files[0]);
        data.append("upload_preset", "myappintern");
        axios.post("https://api.cloudinary.com/v1_1/dplwvxqum/image/upload", data).then(({ data }) => {
            console.log(data.url);
            setBookData({ ...bookData, "image": data.url });
            setLoading(false);
        }).catch((err) => console.log(err));
    }

    const dispatch = useDispatch();


    const submit = (e) => {
        e.preventDefault();
        const random = Math.floor(Math.random() * 1000000);
        dispatch(addBook({ ...bookData, ["id"]: random }));
        redirect();
    }



    return (
        <>
            <div className='bookForm'>
                <form>

                    <div className="form-group">
                        <label>Book Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Book Name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Publisher Name</label>
                        <input type="text" className="form-control" name="publisher" placeholder="Enter Publisher Name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Version/Edition</label>
                        <input type="text" className="form-control" name="version" placeholder="Enter Version/Edition" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>ISBN No.</label>
                        <input type="text" className="form-control" name="isbn" placeholder="Enter ISBN No." onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Number of Pages</label>
                        <input type="text" className="form-control" name="pages" placeholder="Enter Number of Pages" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" placeholder="Enter Price" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Thumbnail</label>
                        <input type="file" className="form-control" onChange={handleImage} />
                    </div>

                    <div className='btnCon'>
                        {!loading ? <Button className='addBt' variant='contained' onClick={submit}>Add Book</Button> : null}
                        {loading ? <Button className='addBtDis' variant='contained' disabled>loading...</Button> : null}
                    </div>

                </form>
            </div>
        </>
    )
}

export default BookForm