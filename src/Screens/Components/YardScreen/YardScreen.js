import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import api from '../../../APIKit';
import MultiSelect from '../Common/MultiSelect';
import getListWithId from '../Common/getListWithId';
import convertToListOfString from '../Common/ConvertToListOfString';
import orderTypeList from '../Common/Jsons.js/orderTypeList';
import SingleSelect from '../Common/SingleSelect';
import TableComp from './TableComp';
import {ScrollView} from 'react-native-gesture-handler';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function YardScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [transporters, setTransporters] = useState([]);
  const [orderType, setOrderType] = useState([]);
  const [transportersList, setTransportersList] = useState([]);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState({id: 0, item: 'LR No'});
  const [searchTypeList, setSearchTypeList] = useState([]);

  const {apiUrl, locationId, tenantId, userId, warehouseId} = useSelector(
    store => store.commonComponent,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: SET_LOADER_ENABLE, payload: true })
    api
      .get(
        `api/yard/get/indenttransporters?locationId=${locationId}&tenantId=${tenantId}&userId=${userId}&warehouseId=${warehouseId}`,
      )
      .then(res => {
        const transportList = getListWithId(res?.data);
        setTransportersList(transportList);
      });
    api
      .get(
        `api/fba/get/filter/searchtype?locationId=${locationId}&tenantId=${tenantId}&userId=${userId}&warehouseId=${warehouseId}`,
      )
      .then(res => {
        const searchList = getListWithId(res?.data);
        setSearchTypeList(searchList);
      });
  }, []);

  useEffect(() => {
    const transporterFilter = convertToListOfString(transporters, 'item');
    const orderTypeFilter = convertToListOfString(orderType, 'item');
    console.log(transporterFilter, orderTypeFilter);
  }, [transporters, orderType]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        directionalLockEnabled
        horizontal={false}
        nestedScrollEnabled={true}>
        <Spinner visible={isLoading} />
        <View style={styles.searchContainer}>
          <View style={styles.singleSelect}>
            <SingleSelect
              title={'Type'}
              optionsList={searchTypeList}
              setSelectedOptions={setSearchType}
              selectedOptions={searchType}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Search..."
              style={styles.TextInput}
              onChangeText={search => setSearch(search)}
            />
          </View>
        </View>
        <View style={styles.multiSelectView}>
          <MultiSelect
            title={'Transporter'}
            optionsList={transportersList}
            setSelectedOptions={setTransporters}
            selectedOptions={transporters}
          />
        </View>
        <View style={styles.multiSelectView}>
          <MultiSelect
            title={'Order Type'}
            optionsList={orderTypeList}
            setSelectedOptions={setOrderType}
            selectedOptions={orderType}
          />
        </View>
        <TableComp />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    padding: 10,
  },
  optionContainerStyle: {
    position: 'absolute',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignContent: 'center',
  },
  singleSelect: {
    width: '40%',
  },
  inputView: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0,
    width: '60%',
    alignItems: 'center',
    color: '#000',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#000',
    width: '100%',
  },
  multiSelectView: {
    width: width,
    marginBottom: 10,
  },
});
