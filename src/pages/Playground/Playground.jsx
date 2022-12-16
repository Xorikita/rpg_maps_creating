import React, {useState} from "react";
import Map from "../../components/Body/Map/Map";

 export default function Playground(){
    const [rangex, setRangex] = useState(20)
    const [rangey, setRangey] = useState(10)
    const [cell, setCell] = useState(60)
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Playground</h1>
            <select onChange={(e) => setRangex(e.target.value)} style={{marginBottom: '20px', width: 'fit-content'}}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <select onChange={(e) => setRangey(e.target.value)} style={{marginBottom: '20px', width: 'fit-content'}}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <input type={Number} onChange={(e) => setCell(e.target.value)} style={{marginBottom: '20px', width: 'fit-content'}}/>
            <Map width={rangex} height={rangey} cell={cell}/>
        </div>
    )
 }