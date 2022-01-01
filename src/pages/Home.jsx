import { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    const [q, setq] = useState(" ")
    const [data, setData] = useState([])
    const [option, setOption] = useState('shows')

    async function searchQuery() {
        const raw = await fetch(`https://api.tvmaze.com/search/${option}?q=${q}`);
        const response = await raw.json();
        setData(response);
    }
    let checked = option === 'shows'

    function keyDown(e) {
        if (e.which === 13) searchQuery();
        else return;
    }
    function results() {
        if (data && data.length === 0) {
            return <div> Not found anything</div>
        }

        
        if (data && data.length > 0) {
            return data[0].show
            ? data.map(item => (<h4 key={item.show.id}>{item.show.name}</h4>))
            : data.map(item => (<h4 key={item.person.id}>{item.person.name}</h4>))
        }

        return null;
    }

    function optionChanger(e){
        setOption(e.target.value);
    }

    return (
        <>
            <Navbar />
            <input type="text" onKeyDown={keyDown} onChange={e => setq(e.target.value)} value={q} />
            <br />
            <input onChange={optionChanger} type="radio" name="option" id="show" value='shows' checked={checked}/>
            <label htmlFor="show">Shows</label>
            <input onChange={optionChanger} type="radio" name="option" id="people" value='people' checked={!checked}/>
            <label htmlFor="people">People</label>
            <br />
            <button onClick={searchQuery}>Search</button>
            {results()}
        </>
    )
}

export default Home
