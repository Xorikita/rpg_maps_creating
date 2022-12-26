import React, {useContext} from "react";
import { Presets } from "../../../contexts/Context";

function PresetSelector(props){
    const [presets, setPresets] = useContext(Presets);
    const new_preset = {}
    const addPreset = () => {
        new_preset.data = props.data
        const presets_data = presets
        presets_data.push(new_preset)
        setPresets(presets_data)
    }
    return(
        <>
            <span>Название пресета</span>
            <input onChange={(e) => {new_preset.name = e.target.value}}/>
            <select onChange={(e) => props.choose(presets.find(preset => preset.name === e.target.value))}>
                <option>new</option>
                {presets.map((preset) => {
                    return(
                        <option value={preset.name}>{preset.name}</option>
                    )
                })}
            </select>
            <button onClick={() => addPreset()}>Сохранить</button>
        </>
    )
}

export default PresetSelector