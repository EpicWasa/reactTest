export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const FETCH_SORTS_PENDING = 'FETCH_SORTS_PENDING';
export const FETCH_SORTS_SUCCESS = 'FETCH_SORTS_SUCCESS';
export const FETCH_SORTS_ERROR = 'FETCH_SORTS_ERROR';


export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING,
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products,
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error,
    }
}
    export function fetchSortsPending() {
        return {
            type: FETCH_SORTS_PENDING,
        }
    }

    export function fetchSortsSuccess(sorts) {
        return {
            type: FETCH_SORTS_SUCCESS,
            sorts: sorts,
        }
    }

    export function fetchSortsError(error) {
        return {
            type: FETCH_SORTS_ERROR,
            error: error,
        }
    }
