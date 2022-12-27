import React, {useContext, useState} from "react";
import { Presets } from "../../../contexts/Context";

function PresetSelector(props){
    const [presets, setPresets] = useContext(Presets);
    const [currentPreset, setCurrentPreset] = useState('new')
    const [presetName, setPresetName] = useState('') 
    const new_preset = {
        name: undefined
    }
    const choosePreset = (e) => {
        props.choose(presets.find(preset => preset.name === e.target.value))
        setCurrentPreset(e.target.value)
        console.log(currentPreset)
    }
    const addPreset = () => {
        let presets_data = []
        presets_data.push(...presets)
        new_preset.data = props.data
        new_preset.name = presetName || undefined
        console.log(currentPreset)
        currentPreset === 'new'? presets_data.push(new_preset) : presets_data[presets_data.indexOf(presets_data.find(preset => preset.name === currentPreset))] = new_preset
        if(new_preset.name){
            setPresets(presets_data)
        }
        props.onClick()
    }
    return(
        <>
            <span>Название пресета</span>
            <input onChange={(e) => {setPresetName(e.target.value)}}/>
            <select onChange={(e) => choosePreset(e)}>
                        <option>new</option>
                        {presets.map((preset, index) => {
                            return(
                                <option value={preset.name} key={index}>{preset.name}</option>
                            )
                        })}
                    </select>
            <button onClick={() => addPreset()}>Сохранить</button>
        </>
    )
}

export default PresetSelector