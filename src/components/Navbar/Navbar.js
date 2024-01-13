import React from 'react'
import "assets/css/Dashboard/Dashboard.css"
import logo from "assets/img/translogo.png"
import { FaRegBell } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="fixed-profile">
            <div className="" >
                <img src={logo} style={{ width: "210px"}} />
            </div>         
        </div>
    )
}

export default Navbar