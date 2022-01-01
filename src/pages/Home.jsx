import { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    const [q, setq] = useState(" ")

    async function searchQuery(){
        const raw = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
        const response = await raw.json();
        console.log(response);
    }

    function keyDown(e){
        if(e.which === 13)  searchQuery();
        else return;
    }


    return (
        <>
           <Navbar/>
           <input type="text" onKeyDown={keyDown} onInput={e => setq(e.target.value)}  value={q}/>
           <button onClick={searchQuery}>Search</button>
        </>
    )
}

export default Home

 