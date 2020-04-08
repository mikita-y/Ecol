import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as requests from '../../../requests/cableRequests'
import * as basketActions from '../../../store/basketReducer'
import CabelList from './CableList/CableList'
import FilterPanel from './FilterPanel/FilterPanel'
import './Price.css'

function Price({ getListRequest, addCableToBasket, deleteCableFromBasket, basket }) {

    const [cableListState, setCableListState] = useState({
        cableList: [],
        criterionSetting: null
    });

    useEffect(() => {
        getListRequest(setCableListState);
    }, [])

    const criterionUpdate = (criterion) => {
        getListRequest(setCableListState, criterion);
    }

    return (
        <div className="price">
            <h3>Прайс-лист Ecol</h3>
            <FilterPanel
                sendCriterion={(criterion) => criterionUpdate(criterion)}
                criterionSetting={cableListState.criterionSetting}
            />
            <h4>Кабельная продукция</h4>
            <CabelList 
                cables={cableListState.cableList} 
                addCableToBasket={addCableToBasket}
                deleteCableFromBasket={deleteCableFromBasket}
                basket={basket}
            />
        </div>
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
)(Price)
