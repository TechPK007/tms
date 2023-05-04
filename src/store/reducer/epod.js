import * as actionTypes from "../type";

const initialState = {
    tableData: [],
    totalPages: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_EPOD_DATA:
            return { ...state, tableData: action.payload };
        case actionTypes.SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload };
        default:
            return state;
    }
};

export default reducer;
