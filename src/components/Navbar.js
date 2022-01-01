import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>  <h4>Are you looking for a movie or actor</h4>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link  to='/starred'>Starred</Link>
                </li>
            </ul>
        </>

    )
}

export default Navbar
