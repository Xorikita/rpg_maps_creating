import React, {useState} from "react";

   function Map(props){
    const [range, setRange] = useState(props.width*props.height)
    const rows_ind = Array.from({length: props.height}, (_, index) => index + 1);
    const colums_ind = Array.from({length: props.width}, (_, index) => index + 1);
    return(
        <div className="map" style={{display:'grid', gridTemplateColumns: 'repeat('+props.width+',10px)', gridTemplateRows: 'repeat('+props.height+',10px)'}}>
            {colums_ind.map((item) => {
                    return(
                        rows_ind.map((item) => {
                            return(
                                <div key={item} style={{border:'2px solid black', width:'10px',height:'10px'}}></div>
                            )
                        })
                    )
                    })}
        </div>
    )
 }

 export default Map