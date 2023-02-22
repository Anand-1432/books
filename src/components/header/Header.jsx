import React from 'react'
import './header.scss'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = (props) => {
    return (
        <>
            <div className='header'>
                <h3> {props.page} </h3>
                <div className='itemSection'>
                    <div><SyncAltIcon /></div>
                    <div><NotificationsActiveIcon /></div>
                    <div style={{ backgroundColor: "#CFE5FF" }}><AccountCircleIcon /></div>
                </div>
            </div>
        </>
    )
}

export default Header