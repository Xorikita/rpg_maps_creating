import React, {useState} from "react";
import s from "./Cell.module.css"
import Modal from "../../Modal/Modal";

function Cell(props){
    const[modal, setModal] = useState(false)
    const[cell, setCell] = useState(data)
    const data = {}
    const changeCell = (key, value) => {
        data[key] = value
        setCell(data)
    }
    const openModal = (e) => {
        setModal(true)
        e.stopPropagation()
    }
    return(
        <div className={s.cell} onClick={(e) => openModal(e)} style={cell} row={props.row} column={props.column}>
            <Modal active={modal} setActive={setModal}>
                <input onChange={(e) => changeCell('background', e.target.value)}/>
                <input onChange={(e) => changeCell('border', e.target.value)}/>
            </Modal>
        </div>
    )
}

export default Cell