import React from 'react'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import './home.scss'

import gif from '../../assets/coming.gif'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='grid'>
                    <SideBar />
                    <div className='inner'>

                        <Header page="Dashborad" />

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

export default Home