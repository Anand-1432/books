import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { REQUEST_BOOKS } from './constants/bookConstants'
import FeeManagement from './pages/feeManagement/FeeManagement'
import Home from './pages/home/Home'
import Setting from './pages/setting/Setting'

import array from './Array.json'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REQUEST_BOOKS, payload: array });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fee' element={<FeeManagement />} />
        <Route path='setting' element={<Setting />} />
      </Routes>
    </>
  )
}

export default App