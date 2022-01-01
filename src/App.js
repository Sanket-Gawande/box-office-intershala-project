import React from 'react'
import Home from './pages/Home'
import Starred from './pages/Starred'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const App = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/starred' element={<Starred/>}/>
            </Routes>
       </BrowserRouter>
    )
}

export default App
