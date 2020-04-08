import React from 'react';
import './CableList.css'

export default function CableList({ cables, deleteCableFromBasket, updateCableInBasket }) {
    
    const changeCabelLength = (e, element) => {
        e.preventDefault();
        let value = e.target.value;
        value = value.replace(",", ".");
        const newLength = +value;
        
        if(!newLength){
            if(newLength != 0 && value != "") {
                //prompt(newLength);
                return;
            }
        }

        if(value.length > 10){
            return;
        }
    
        if(newLength > 10000){
            return;
        }

        updateCableInBasket({...element, length: value});
    }

    const performance = (value) =>{
        switch(value){
            case 0: return "-";
            case 1: return "нга";
            case 2: return "нга-LS";
            case 3: return "нга-FRLS";
            case 4: return "нга-HF";
            case 5: return "нга-FRHF";
        }
    }

    return (
        <table className="cableList">
            <tbody>
                <tr>
                    <th>Маркировка</th>
                    <th>Исполнение</th>
                    <th>Размер</th>
                    <th>Цена</th>
                    <th>Длина(км)</th>
                    <th></th>
                </tr>
              {cables.map((element) => 
                    <tr key={element.id.toString()}>
                        <td>{element.marking}{element.additionalMarking}</td>
                        <td>{performance(element.performance)}</td>
                        <td>{element.pairsNumber}{element.twist == 2 ? "x2x" : "x"}{element.section}</td>
                        <td>{element.price}</td>
                        <td>
                            <input 
                                type="text" 
                                value={element.length} 
                                onChange={(e) => changeCabelLength(e, element)}
                            />
                        </td>            
                        <td>
                            <input
                                className="btn btn-outline-danger" 
                                type="submit" 
                                value="x"
                                onClick={() => deleteCableFromBasket(element)}
                            />
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
}