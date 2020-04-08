import axios from 'axios'
import { articleListLoading as listLoading, articleLoading as loading} from '../store/loadingReducer'
import { setErrorFromRequest } from '../store/errorReducer'

export function getRequest(id, setItem) {
    return function(dispatch) {
        dispatch(loading());
        axios
            .get(`api/article/${id}`)
            .then(response => {
                setItem(response.data)
            })
            .catch(error => {
                dispatch(setErrorFromRequest(error));
            })
            .finally(() => {
                dispatch(loading())
            });
    }
}

export function createRequest(payload) {
    return function(dispatch) {
        dispatch(loading());
        axios
            .post(`api/article`, payload)
            .then(response => {
                //setArticle(response.data)
            })
            .catch(error => {
                dispatch(setErrorFromRequest(error));
            })
            .finally(() => {
                dispatch(loading())
            });
    }
}

export function updateRequest(payload) {
    return function(dispatch) {
        dispatch(loading());
        axios
            .put(`api/article`, payload)
            .then(response => {
                //setArticle(response.data)
            })
            .catch(error => {
                dispatch(setErrorFromRequest(error));
            })
            .finally(() => {
                dispatch(loading())
            });
    }
}

export function deleteRequest(id) {
    return function(dispatch) {
        dispatch(loading());
        axios
            .delete(`api/article/${id}`)
            .then(response => {
                //setArticle(response.data)
            })
            .catch(error => {
                dispatch(setErrorFromRequest(error));
            })
            .finally(() => {
                dispatch(loading())
            });
    }
}

export function getListRequest(setList) {
    return function(dispatch) {
        dispatch(listLoading());
        axios
            .get(`api/article`)
            .then(response => {
                setList(response.data)
            })
            .catch(error => {
                dispatch(setErrorFromRequest(error))
            })
            .finally(() => {
                dispatch(listLoading())
            });
    }
}