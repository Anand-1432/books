import React, { useState } from 'react'
import './bookForm.scss'

import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addBook } from '../../actions/bookAction';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const BookForm = ({ redirect }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();


    const [bookData, setBookData] = useState({
        name: "",
        publisher: "",
        version: "",
        isbn: "",
        pages: "",
        price: "",
        image: "",
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
            setBookData({ ...bookData, "image": data.url });
            setLoading(false);
        }).catch((err) => console.log(err));
    }

    const dispatch = useDispatch();


    const submit = () => {
        if(bookData.image){
            dispatch(addBook(bookData, redirect));
        }else{
            window.alert("please select book Thumbnail");
        }
    }



    return (
        <>
            <div className='bookForm'>


                <form onSubmit={handleSubmit(submit)}>

                    <div className="form-group">
                        <label>Book Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Book Name" value={bookData.name}  {...register("name", { onChange: (e) => handleChange(e), required: "name is required!" })}/>
                        <p>{errors.name?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Publisher Name</label>
                        <input type="text" className="form-control" name="publisher" placeholder="Enter Publisher Name" value={bookData.publisher} {...register("publisher", { onChange: (e) => handleChange(e), required: "publisher is required!" })}/>
                        <p>{errors.publisher?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Version/Edition</label>
                        <input type="text" className="form-control" name="version" placeholder="Enter Version/Edition"  value={bookData.version}  {...register("version", { onChange: (e) => handleChange(e), required: "version is required!" })}/>
                        <p>{errors.version?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>ISBN No.</label>
                        <input type="text" className="form-control" name="isbn" placeholder="Enter ISBN No."  value={bookData.isbn}  {...register("isbn", { onChange: (e) => handleChange(e), required: "isbn no. is required!" })}/>
                        <p>{errors.isbn?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Number of Pages</label>
                        <input type="text" className="form-control" name="pages" placeholder="Enter Number of Pages" value={bookData.pages}  {...register("pages", { onChange: (e) => handleChange(e), required: "number of pages is required!" })}/>
                        <p>{errors.pages?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" placeholder="Enter Price" value={bookData.price}  {...register("price", { onChange: (e) => handleChange(e), required: "price is required!" })}/>
                        <p>{errors.price?.message}</p>
                    </div>

                    <div className="form-group">
                        <label>Thumbnail</label>
                        <input type="file" className="form-control" onChange={handleImage} />
                    </div>

                    <div className='btnCon'>
                        {!loading ? <Button className='addBt' variant='contained' type='submit' onSubmit={submit}>Add Book</Button> : null}
                        {loading ? <Button className='addBtDis' variant='contained' disabled>loading...</Button> : null}
                    </div>

                </form>

            </div>
        </>
    )
}

export default BookForm