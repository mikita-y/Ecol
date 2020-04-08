import axios from 'axios'
import { cableListLoading as listLoading, cableLoading as loading} from '../store/loadingReducer'
import { setErrorFromRequest } from '../store/errorReducer'

export function getRequest(id, setItem) {
    return function(dispatch) {
        dispatch(loading());
        axios
            .get(`api/cable/${id}`)
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
            .post(`api/cable`, payload)
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
            .put(`api/cable`, payload)
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
            .delete(`api/cable/${id}`)
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

export function getListRequest(setList, criterion) {
    return function(dispatch) {
        dispatch(listLoading());

        let request = "api/cablelist";

        if(criterion) {
            request += "?"

            criterion.marking && (request += `marking=${criterion.marking}`);
            criterion.performance && (request += `&performance=${criterion.performance}`);
            criterion.pairsNumber && (request += `&pairsNumber=${criterion.pairsNumber}`);
            criterion.twist && (request += `&twist=${criterion.twist}`);
            criterion.pageNumber && (request += `&pageNumber=${criterion.pageNumber}`);
            criterion.pageSize && (request += `&pageSize=${criterion.pageSize}`);
        }

        axios
            .get(request)
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