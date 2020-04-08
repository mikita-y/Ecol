import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as requests from '../../../requests/cableRequests'
import * as basketActions from '../../../store/basketReducer'
import CabelList from './CableList/CableList'
import FilterPanel from './FilterPanel/FilterPanel'
import PaginationPanel from '../Common/PaginationPanel/PaginationPanel'
import './Price.css'

function Price({ getListRequest, addCableToBasket, deleteCableFromBasket, basket }) {

    const [cableListState, setCableListState] = useState({
        cableList: [],
        criterionSetting: null,
        pageSetting: {
            currentPage: 0,
            pageCount: 1
        }
    });

    const [criterion, setCriterion] = useState({
        pageSize: 5
     });

    useEffect(() => {
        getListRequest(setCableListState, criterion);
    }, [])

    const criterionUpdate = (filterCriterion) => {
        const newCriterion = { ...criterion, ...filterCriterion };
        setCriterion(newCriterion);
        getListRequest(setCableListState, newCriterion);
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
            <PaginationPanel 
                pageSetting={cableListState.pageSetting}
                changeCurrentPage={(pageNumber) => getListRequest(setCableListState, {...criterion, pageNumber})}
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
