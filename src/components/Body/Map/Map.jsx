import React, {useState} from "react";
import s from "./Map.module.css"
import Cell from "./Cell/Cell";

   function Map(props){
    const [width, setWidth] = useState(props.width)
    const rows_ind = Array.from({length: props.height}, (_, index) => index + 1);
    const colums_ind = Array.from({length: props.width}, (_, index) => index + 1);
    return(
        <div className={s.map} style={{gridTemplateColumns: 'repeat('+props.width+','+props.cell+'px)', gridTemplateRows: 'repeat('+props.height+','+props.cell+'px)'}}>
            {colums_ind.map((item) => {
                    return(
                        rows_ind.map((item) => {
                            return(
                                <Cell key={item}/>
                            )
                        })
                    )
                    })}
        </div>
    )
 }

 export default Map