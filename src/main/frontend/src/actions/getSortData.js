import {fetchSortsPending, fetchSortsSuccess, fetchSortsError} from './actions';

function fetchSorts() {
    return dispatch => {
        dispatch(fetchSortsPending());
        fetch('http://localhost:8080/api/tea/sorts')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(fetchSortsSuccess(res));

                return res;
            })
            .catch(error => {
                dispatch(fetchSortsError(error));
            })
    }
}

export default fetchSorts;