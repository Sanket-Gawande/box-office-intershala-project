import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from '../pages/Home'
import Starred from '../pages/Starred'

const Navbar = () => {
    return (
        <BrowserRouter>
                <ul>
                    <li>
                        <Link exact to='/'>Home</Link>
                    </li>
                    <li>
                        <Link exact to='/starred'>Starred</Link>
                    </li>
                </ul>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/starred' element={<Starred/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar
