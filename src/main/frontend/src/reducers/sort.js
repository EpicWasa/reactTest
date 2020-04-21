import {FETCH_SORTS_PENDING, FETCH_SORTS_SUCCESS, FETCH_SORTS_ERROR} from '../actions/actions';

const initialState = {
    sorts: [],
}

export function sortReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SORTS_PENDING:
            return {
                ...state,

            }
        case FETCH_SORTS_SUCCESS:
            return {
                ...state,
                sorts: action.sorts
            }
        case FETCH_SORTS_ERROR:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export const getSorts = state => state.sorts;
export const getSortsPending = state => state.pending;
export const getSortsError = state => state.error;