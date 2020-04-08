import React from 'react';
import { connect } from 'react-redux'
import './Loading.css'

function Loading({ loading }){    

    return  loading && (
        <div className="spinner-border text-info" id="loading" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

const mapStateToProps = state => {
    const loading = state.loadingState;
    return {
        loading: 
        loading.articleListLoading ||
        loading.cableListLoading ||
        loading.messageListLoading ||
        loading.articleLoading ||
        loading.messageLoading ||
        loading.cableLoading
    }
}
  
export default connect(
    mapStateToProps
)(Loading)