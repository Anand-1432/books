import React, { useState } from 'react'
import './textBoxes.scss'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PinDropIcon from '@mui/icons-material/PinDrop';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatIcon from '@mui/icons-material/Chat';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';


import fb from '../../assets/fb.jpg'
import insta from '../../assets/insta.png'
import link from '../../assets/link.png'
import twitter from '../../assets/twitter.webp'



const TextBoxes = () => {


    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);


    return (
        <>
            <div className='textBox'>
                <div className='inner'>

                    <div className='sectionPart container'>
                        <div className='row'>

                            <div className='part1 col-md-6 col-lg-6 col-xl-6'>
                                <div className='box'>
                                    <div className='icon'> <HelpOutlineIcon style={{ fontSize: '40px' }} /></div>
                                    <div className='content'>
                                        <div>FAQ</div>
                                        <section>Lorem ipsum doolor sit amet</section>
                                    </div>
                                </div>
                            </div>

                            <div className='part2 col-md-6 col-lg-6 col-xl-6'>
                                <div className='box'>
                                    <div className='icon'> <PinDropIcon style={{ fontSize: '40px' }} /></div>
                                    <div className='content'>
                                        <div>Travel Guide</div>
                                        <section>Lorem ipsum doolor sit amet</section>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='sections section1'>
                        <div className='sectionTop'>
                            <div className='icon'> <ChatIcon style={{ fontSize: '40px' }} /></div>
                            <div className='content'>
                                <div>Chat</div>
                                <section>Lorem ipsum doolor sit amet</section>
                                <button className='btn' onClick={() => setShow1(!show1)}><KeyboardArrowDownIcon /></button>
                            </div>
                        </div>

                        {show1 ? <div className='mid1'>
                            <div className='midInner'>
                                <div id='socialBox'>
                                    <div>
                                        <Button id='tel' className='bt' variant='contained'><TelegramIcon /></Button>
                                        <p>Telegram</p>
                                    </div>
                                </div>
                                <div id='socialBox'>
                                    <div>
                                        <Button id='what' className='bt' variant='contained'><WhatsAppIcon /></Button>
                                        <p>whatsApp</p>
                                    </div>
                                </div>
                                <div id='socialBox'>
                                    <div>
                                        <Button id='chat' className='bt' variant='contained'><MarkUnreadChatAltIcon /></Button>
                                        <p>Live chat</p>
                                    </div>
                                </div>
                            </div>
                        </div> : null}

                    </div>



                    <div className='sections section2'>

                        <div className='sectionTop'>
                            <div className='icon'> <ConnectWithoutContactIcon style={{ fontSize: '40px' }} /></div>
                            <div className='content'>
                                <div>Social</div>
                                <section>Lorem ipsum doolor sit amet</section>
                                <button className='btn' onClick={() => setShow2(!show2)}><KeyboardArrowDownIcon /></button>
                            </div>
                        </div>

                        {show2 ? <div className='mid2'>
                            <div>
                                <img src={fb} alt="" />
                            </div>
                            <div>
                                <img src={twitter} alt="" />
                            </div>
                            <div>
                                <img src={insta} alt="" />
                            </div>
                            <div>
                                <img src={link} alt="" />
                            </div>
                        </div> : null}

                    </div>



                    <div className='sections section3'>

                        <div className='sectionTop'>
                            <div className='icon'> <ForwardToInboxIcon style={{ fontSize: '40px' }} /></div>
                            <div className='content'>
                                <div>Send Query</div>
                                <section>Lorem ipsum doolor sit amet</section>
                                <button className='btn' onClick={() => setShow3(!show3)}><KeyboardArrowDownIcon /></button>
                            </div>
                        </div>

                      { show3 ?  <div className='mid3'>

                            <div className='container'>
                                <div className='row'>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label>Subject</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label>Order no.</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Your Query</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>

                            <div className='btnBox'>
                                <Button className='bt1' variant='contained'>Submit</Button>
                            </div>

                        </div> :  null}

                    </div>

                </div>
            </div>
        </>
    )
}

export default TextBoxes