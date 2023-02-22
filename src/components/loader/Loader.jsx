import React from 'react'
import './loader.scss'
import loader from '../../assets/loader.gif'

const Loader = () => {
    return (
        <>
            <div className='loader'>
                 <div className='loaderInner'>
                    <img src={loader} alt="" />
                 </div>
            </div>
        </>
    )
}

export default Loader