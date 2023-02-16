import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import TextBoxes from '../../components/textBoxes/TextBoxes'
import './home.scss'

const Home = () => {
    return (
        <>
            <div className='home'>

               <Navbar/>

                <div className='top'>
                    <div className='text'>
                        <h1>Hello, how can we help you?</h1>
                        <section>Find Travel guide, FAQ, chat,</section>
                    </div>
                    <div className='design1'></div>
                    <div className='design2'></div>
                </div>

               <TextBoxes/>

            </div>
        </>
    )
}

export default Home