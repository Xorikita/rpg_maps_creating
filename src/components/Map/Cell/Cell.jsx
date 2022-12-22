import React, {useState} from "react";
import s from "./Cell.module.css"
import Modal from "../../Modal/Modal";

function Cell(props){
    const[modal, setModal] = useState(false)
    const[cell, setCell] = useState(data)
    const data = {}
    const changeCell = (key, value) => {
        data.style[key] = value
        setCell(data)
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
    return(
        <div className={s.cell} onClick={(e) => openModal(e)} style={cell} row={props.row} column={props.column} data-action={data.action+','+data.count}>
            <Modal active={modal} setActive={setModal}>
                <div className={s.options}>
                    <span>Фон</span>
                    <input onChange={(e) => changeCell('background', e.target.value)}/>
                    <span>Картинка</span>
                    <input onChange={(e) => changeCell('background-image', 'url("'+e.target.value+'")')}/>
                    <span>Действие</span>
                    <select>
                        <option value='none' selected={true}>Нет</option>
                        <option value='moveto'>Идти на</option>
                        <option value='stan'>Пропуск ходов</option>
                        <option value='moveagain'>Ходить еще</option>
                    </select>
                    <span>Число действий</span>
                    <input type={"number"}></input>
                    <span>Пресет</span>
                    <select></select>
                    <input placeholder="Название пресета"/>
                    <button>Сохранить пресет</button>
                    <button onClick={() => setModal(false)}>Ок</button>
                    <button onClick={() => canselModal()}>Отмена</button>
                </div>
            </Modal>
        </div>
    )
}

export default Cell