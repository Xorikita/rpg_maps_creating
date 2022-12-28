import React, {useState, useEffect} from "react";
import Map from "../../components/Map/Map";
import s from "./Playground.module.css"
// import maps from "../../test_data/maps.json"

 export default function Playground(){
    const [rangex, setRangex] = useState(20)
    const [rangey, setRangey] = useState(10)
    const [cell, setCell] = useState(60)
    const [data, setData] = useState({x: rangex, y: rangey, cells_size: cell, cells_ids: []})
    useEffect(() => {
        setData({...data, x: rangex, y: rangey, cells_size: cell})
    }, [rangex, rangey, cell])
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Playground</h1>
            <select onChange={(e) => setRangex(e.target.value)} className={s.control} defaultValue={20}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <select onChange={(e) => setRangey(e.target.value)} className={s.control}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <input type='number' onChange={(e) => setCell(e.target.value)} className={s.control} value={cell}/>
            <Map width={rangex} height={rangey} cell={cell} data={data} setData={setData}/>
            <button onClick={() => {console.log(data)}}>save</button>
        </div>
    )
 }