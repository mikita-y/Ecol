import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as requests from '../../../requests/cableRequests'
import * as basketActions from '../../../store/basketReducer'
import CableList from './CableList/CableList'
import './Basket.css'

function Basket({ getListRequest, updateCableInBasket, 
    deleteCableFromBasket, basket, setCustomerData, checkBasket, saveBasket }) {

    const order = (e) => {
        e.preventDefault();
        if(summaryPrice() == 0)
            console.log("error")
        console.log("order")
    }

    const summaryPrice = () => {
        let price = 0;
        basket.cables.forEach(item => price += item.price * item.length)
        return price;
    }

    if(basket.cables.length == 0){
        return <h3>Пуста корзина</h3>
    }

    return (
            <form className="standart-form">
                <h2>Оформление заказа</h2>
                <CableList 
                    cables={basket.cables} 
                    updateCableInBasket={updateCableInBasket}
                    deleteCableFromBasket={deleteCableFromBasket}
                />
                <h3>
                    Всего: {summaryPrice()}
                </h3>
                
            <div className="form-group">
                <label>Введите ваше имя:</label>
                <input
                    className="form-control" 
                    type="text" 
                    name="fullName" 
                    value={basket.fullName} 
                    onChange={(e) => setCustomerData({ field: e.target.name, value: e.target.value})}
                />
            </div>
            
            <div className="form-group">
                <label>Номер телефона:</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="phoneNumber" 
                    value={basket.phoneNumber} 
                    onChange={(e) => setCustomerData({ field: e.target.name, value: e.target.value})}
                />
            </div>
                <input 
                    className="btn btn-outline-primary"
                    type="submit" 
                    onClick={(e) => order(e)} value="Оформить заказ"
                />            
            </form>
    );
}

const mapStateToProps = state => {
    return {
        basket: state.basketState
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        ...requests,
        ...basketActions
    },
    dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basket)
