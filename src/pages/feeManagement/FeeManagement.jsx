import React from 'react'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import './feeManagement.scss'

import gif from '../../assets/coming.gif'


const FeeManagement = () => {
    return (
        <>
            <div className='fee'>
                <div className='grid'>
                    <SideBar />

                    <div className='inner'>

                        <Header page="Fee Management" />

                        <div className='comingSoon'>
                            <div>
                                <img src={gif} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FeeManagement