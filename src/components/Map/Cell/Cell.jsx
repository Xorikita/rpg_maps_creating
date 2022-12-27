import React, {useState} from "react";
import s from "./Cell.module.css"
import Modal from "../../Modal/Modal";
import PresetSelector from "../PresetSelector/PresetSelector";

function Cell(props){
    let data = {
        style: {},
        atributes: {}
    }
    const[modal, setModal] = useState(false)
    const[cell, setCell] = useState(data)
    const changeStyle = (key, value) => {
        setCell({...cell, style: {...cell.style, [key]: value}});
    }
    const changeAtributes = (key, value) => {
        setCell({...cell, atributes: {...cell.atributes, [key]: value}});
    }
    const canselModal = () => {
        data = {}
        setCell(data)
        setModal(false)
    }
    const openModal = (e) => {
        setModal(true)
        e.stopPropagation()
    }
    const choosePreset = (preset) =>{
        if(preset){
            data = preset.data
            setCell(data)
        }
    }
    return(
        <div className={s.cell} onClick={(e) => openModal(e)} style={cell.style} {...cell.atributes} row={props.row} column={props.column}>
            <Modal active={modal} setActive={setModal}>
                <div className={s.options}>
                    <span>Фон</span>
                    <input onChange={(e) => changeStyle('background', e.target.value)}/>
                    <span>Картинка</span>
                    <input onChange={(e) => changeStyle('backgroundImage', 'url("'+e.target.value+'")')}/>
                    <span>Действие</span>
                    <select onChange={(e) => changeAtributes('data-type', e.target.value)}>
                        <option value='none'>Нет</option>
                        <option value='moveto'>Идти на</option>
                        <option value='stan'>Пропуск ходов</option>
                        <option value='moveagain'>Ходить еще</option>
                    </select>
                    <span>Число действий</span>
                    <input type={"number"} onChange={(e) => changeAtributes('data-count', e.target.value)}></input>
                    <PresetSelector data={cell} choose={choosePreset} onClick={() => setModal(false)}/>
                    <button onClick={() => setModal(false)}>Ок</button>
                    <button onClick={() => canselModal()}>Очистить</button>
                </div>
            </Modal>
        </div>
    )
}

export default Cell