import * as actionTypes from "../type";

const initialState = {
    yardManagementData: [],
    transporterList: [],
    destinationCities: [],
    vehicleTypeList: [],
    transporterDetailsList: [],
    refreshToken: null,
    totalPages: 1
    // isAuthenticated: false,
    // basicDetails: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_YARDMANAGEMENT_DATA:
            return { ...state, yardManagementData: action.payload };
        case actionTypes.SET_TRANSPORTER_DATA:
            return { ...state, transporterList: action.payload };
        case actionTypes.SET_DESTINATIONCITY_DATA:
            return { ...state, destinationCities: action.payload };
        case actionTypes.SET_VEHICLETYPE_DATA:
            return { ...state, vehicleTypeList: action.payload };
        case actionTypes.SET_TRANSPORTER_ALL_DATA:
            return { ...state, transporterDetailsList: action.payload };
        case actionTypes.SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload };
        default:
            return state;
    }
};

export default reducer;