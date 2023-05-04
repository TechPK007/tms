
import getBaseUrl from '../../Screens/Components/Common/BaseUrl';
import * as actionTypes from '../type';

const initialState = {
  apiUrl: getBaseUrl(),
  downloadEnable: false,
  downloadTemplate: false,
  loader: false,
  userData: {},
  locationId: 1,
  locationBranchId: 1,
  tenantId: 1,
  userId: 1,
  warehouseId: 1,
  role: [],
  roleOfUser: '',
  locationList: [],
  shipmentModeList: ['FTL', 'PTL'],
  rowsPerPageList: [15, 25, 50],
  refetch: false,
  showSide: false,
  darkMode: false,
  userStatus: ['Active', 'Inactive'],
  moduleList: ['TMS'],
  genderList: ['M', 'F'],
  titleList: ['Mr', 'Mrs'],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {...state, userData: action.payload};
    case actionTypes.SET_ROLE_DATA:
      return {...state, role: action.payload};
    case actionTypes.SET_ROLE_OF_USER:
      return {...state, roleOfUser: action.payload};
    case actionTypes.SET_DOWNLOAD_ENABLE:
      return {...state, downloadEnable: action.payload};
    case actionTypes.SET_DOWNLOADTEMPLATE_ENABLE:
      return {...state, downloadTemplate: action.payload};
    case actionTypes.SET_LOADER_ENABLE:
      return {...state, loader: action.payload};
    case actionTypes.SET_REFETCH_ENABLE:
      return {...state, refetch: action.payload};
    case actionTypes.SET_LOCATION_ID:
      return {...state, locationId: action.payload};
    case actionTypes.SET_LOCATIONBRANCH_ID:
      return {...state, locationBranchId: action.payload};
    case actionTypes.SET_TENANT_ID:
      return {...state, tenantId: action.payload};
    case actionTypes.SET_USER_ID:
      return {...state, userId: action.payload};
    case actionTypes.SET_WAREHOUSE_ID:
      return {...state, warehouseId: action.payload};
    case actionTypes.SET_LOCATION_LIST:
      return {...state, locationList: action.payload};
    case actionTypes.SET_SIDE_SHOW:
      return {...state, showSide: action.payload};
    case actionTypes.SET_DARK_MODE:
      return {...state, darkMode: action.payload};
    case actionTypes.SET_USER_STATUS:
      return {...state, userStatus: action.payload};
    case actionTypes.SET_MODULE_LIST:
      return {...state, moduleList: action.payload};
    default:
      return state;
  }
};

export default reducer;
