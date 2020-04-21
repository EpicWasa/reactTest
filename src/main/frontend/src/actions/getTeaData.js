import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://localhost:8080/api/tea/list')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(fetchProductsSuccess(res));

                return res;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;