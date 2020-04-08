import React from 'react';
import './CableList.css'

export default function CabelList({ cables, basket, deleteCableFromBasket, addCableToBasket }) {

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

    const isElementInBasket = (element) => {
        const item = basket.cables.find(x => x.id == element.id);
        return basket.cables.indexOf(item) != -1;
    }

    return (
        <table className="cableList">
            <tbody>
                <tr>
                    <th>Маркировка</th>
                    <th>Исполнение</th>
                    <th>Размер</th>
                    <th>Цена</th>
                    <th>Корзина</th>
                </tr>
              {cables.map((element) => 
                    <tr key={element.id.toString()}>
                        <td>{element.marking}{element.additionalMarking}</td>
                        <td>{performance(element.performance)}</td>
                        <td>{element.pairsNumber}{element.twist == 2 ? "x2x" : "x"}{element.section}</td>
                        <td>{element.price}</td>
                        <td>
                            {isElementInBasket(element)
                                ? <input
                                    className="btn btn-outline-danger" 
                                    type="submit" 
                                    value="Удалить"
                                    onClick={() => deleteCableFromBasket(element)}
                                />
                                : <input 
                                    className="btn btn-outline-primary"
                                    type="submit" 
                                    value="Добавить"
                                    onClick={() => addCableToBasket(element)}
                                />
                            }
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
}
