import React, { useEffect, useState } from 'react'
import BookCard from '../../components/bookCard/BookCard'
import BookForm from '../../components/bookForm/BookForm'
import Header from '../../components/header/Header'
import { Button } from '@mui/material'
import SideBar from '../../components/sidebar/SideBar'
import './setting.scss'
import { useSelector } from 'react-redux'

const Setting = () => {

    const [state, setState] = useState("add");
    const { books } = useSelector(state => state.bookReducer);

    const [bookArray, setBookArray] = useState([]);
    const [subscribe, setSubscribe] = useState([]);

    useEffect(() => {
        if (books); {
            setBookArray(books)
            const sub = books.filter((obj) => {
                return obj.status == true
            })
            setSubscribe(sub);
        }
    }, [books]);

    return (
        <>
            <div className='setting'>
                <div className='grid'>
                    <SideBar />


                    <div className='inner'>
                        <Header page="Settings" />

                        <div className='sections'>
                            <Button variant='outlined' className={`bt ${state == "add" ? 'activeBtn' : ''}`} onClick={() => setState("add")}>Add Book</Button>
                            <Button variant='outlined' className={`bt ${state == "book" ? 'activeBtn' : ''}`} onClick={() => setState("book")}>{`Available Books (${bookArray.length})`}</Button>
                            <Button variant='outlined' className={`bt ${state == "subscribe" ? 'activeBtn' : ''}`} onClick={() => setState("subscribe")}>{`Subscribed Book (${subscribe.length})`}</Button>
                        </div>

                        {state == "add" && <div className='listingSection'>
                            <BookForm redirect={() => setState("book")} />
                        </div>}

                        {state == "book" && <div className='listingSection'>
                            {bookArray.map((val, index) => {
                                return (
                                    <BookCard data={val} key={index} />
                                );
                            })}
                        </div>}

                        {state == "subscribe" && <div className='listingSection'>
                            {subscribe.map((val, index) => {
                                return (
                                    <BookCard data={val} key={index} />
                                );
                            })}
                        </div>}


                    </div>

                </div>
            </div>
        </>
    )
}

export default Setting