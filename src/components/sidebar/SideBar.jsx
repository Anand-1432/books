import React, { useEffect, useState } from 'react'
import './sideBar.scss'

import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SettingsIcon from '@mui/icons-material/Settings';
import img from '../../assets/school.png'

import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {

    const location = useLocation();
    const [path, setPath] = useState('/');

    useEffect(() => {
        setPath(location.pathname);
    }, [])

    return (
        <>
            <div className='sidebar'>
                <div className='imgSection'><img src={img} alt="" /></div>
                <div className='options'>
                    <Link to="/" className="link"><div className={path == "/" ? "active" : ""}><AddHomeWorkIcon className='icon' /> DashBoard</div></Link>
                    <Link to="/fee" className="link"><div className={path == "/fee" ? "active" : ""}><CurrencyRupeeIcon className='icon' /> Fee Management</div></Link>
                    <Link to="/setting" className="link"><div className={path == "/setting" ? "active" : ""}><SettingsIcon className='icon' /> Settings</div></Link>
                </div>
            </div>
        </>
    )
}

export default SideBar