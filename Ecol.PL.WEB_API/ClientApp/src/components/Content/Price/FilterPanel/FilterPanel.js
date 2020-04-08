import React, { useState } from "react"
import './FilterPanel.css'

export default function FilterPanel({ sendCriterion, criterionSetting }) {
    const [criterion, setCriterion] = useState({ });

    function submit(e) {
        e.preventDefault();
        sendCriterion(criterion)
    }

    function changing(e) {
        let object = { 
            ...criterion,
            [e.target.name]: e.target.value == "" ? null : e.target.name == "marking" ? e.target.value : +e.target.value
        };
        setCriterion(object);
    }

    return (
        <form 
            className='filterPanel'
            onSubmit={submit} 
            onChange={changing}
        >
            <div>
                <label>
                    <p>Маркировка:</p>
                    <select name='marking' onChange={changing}>
                        <option value="" >-</option>
                        {criterionSetting && criterionSetting.markingList.map((element) => 
                            <option key={element} value={element}>{element}</option>
                        )}
                    </select>
                </label>
                <label>
                    <p>Исполнение:</p>
                    <select name="performance" onChange={changing}>
                        <option value="">-</option>
                        <option value="0">нет</option>
                        <option value="1">нг(А)</option>
                        <option value="2">нг(А)-LS</option>
                        <option value="3">нг(А)-FRLS</option>
                        <option value="4">нг(А)-HF</option>
                        <option value="5">нг(А)-FRHF</option>
                    </select>
                </label>
                <label>
                    <p>Число пар:</p>
                    <select name="pairsNumber" onChange={changing}>
                        <option value="">-</option>
                        {criterionSetting && criterionSetting.pairsNumberList.map((element) => 
                            <option key={element} value={element}>{element}</option>
                        )}
                    </select>
                </label>
                <label>
                    <p>{criterion.twist == 2 ? "x 2 x" : "x"}</p>
                </label>
                <label>
                    <p>Сечение:</p>
                    <select name="section" onChange={changing}>
                        <option value="">-</option>
                        {criterionSetting && criterionSetting.sectionList.map((element) => 
                            <option key={element} value={element}>{element}</option>
                        )}
                    </select>
                </label>
            </div>
            
            <div>
                <label>
                    <input name="twist" type="radio" value="" /> Все
                </label>
                <label>
                    <input name="twist" type="radio" value="1" /> Жильный
                </label>
                <label>
                    <input name="twist" type="radio" value="2" /> Парный
                </label>
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
                onClick={submit} >
                Найти
            </button>
        </form>
	)
}