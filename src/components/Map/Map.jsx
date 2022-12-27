import React, {useState, useEffect} from "react";
import s from "./Map.module.css"
import Cell from "./Cell/Cell";
import { Presets } from "../../contexts/Context";

   function Map(props){
    // const [width, setWidth] = useState(props.width)
    const rows_ind = Array.from({length: props.height}, (_, index) => index + 1);
    const colums_ind = Array.from({length: props.width}, (_, index) => index + 1);
    const [presets, setPresets] = useState([])
    useEffect(() => {
        props.setData({...props.data, presets: presets})
    }, [presets])
    return(
        <div className={s.map} style={{gridTemplateColumns: 'repeat('+props.width+','+props.cell+'px)', gridTemplateRows: 'repeat('+props.height+','+props.cell+'px)'}}>
            <Presets.Provider value={[presets, setPresets]}>
                {colums_ind.map((row) => {
                    return(
                        rows_ind.map((column) => {
                            return(
                                <Cell row={row} column={column} key={column+'-'+row}/>
                            )
                        })
                    )
                })}
            </Presets.Provider>
        </div>
    )
 }

 export default Map