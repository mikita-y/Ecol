import React from 'react';
import { connect } from 'react-redux'
import { deleteError } from '../../../store/errorReducer'
import "./ErrorView.css"

function Error({errors, deleteError}){    

    return errors.length > 0 && (
        <div>
            <div className="errorView">
                <h3>
                    {errors[0]}
                </h3>
                <button
                    type="submit" 
                    className="btn btn-primary btn-block"
                    onClick={() => deleteError(1)} >
                        Ok
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteError: (payload) => dispatch(deleteError(payload)),
    }
}

const mapStateToProps = state => {
    return {
        errors: state.errorState.errors,
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Error)