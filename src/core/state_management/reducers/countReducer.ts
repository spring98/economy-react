import {CountActionType} from "../actions/countAction";

type CountState = {
    count: number;
}

const initialState: CountState = {
    count: 0
}

export const countReducer = (state: CountState = initialState, action: CountActionType) => {
    switch (action.type) {
        case 'INCREASE_BY':
            return {
                ...state,
                count: state.count + action.payload,
            }
        default:
            return state
    }
}