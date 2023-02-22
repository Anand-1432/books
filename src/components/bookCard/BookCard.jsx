import React, { useEffect } from 'react'
import './bookCard.scss'

import book from '../../assets/book1.jpg'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { makeSubscribe } from '../../actions/bookAction'

const BookCard = ({ data }) => {

  const dispatch = useDispatch();

  const makeSub = (id) => {
    dispatch(makeSubscribe(id));
  }

  console.log(data);


  return (
    <>
      <div className='bookCard'>

        <div className='imgCon'>
          <img src={data.image ? data.image : book} alt="" />
        </div>

        <div className='title'>{data.name}</div>

        <div className='btnSection'>
          {data.status ? <Button className='but1' variant='outlined' disabled>Subscribed</Button> : null}
          {!data.status ? <Button className='but' variant='outlined' onClick={() => makeSub(data.id)}>Subscribe</Button> : null}
        </div>

      </div>
    </>
  )
}

export default BookCard