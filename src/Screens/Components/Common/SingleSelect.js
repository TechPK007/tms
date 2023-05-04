import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

// Options data must contain 'item' & 'id' keys

export default function SingleSelect({
  title,
  optionsList,
  selectedOptions,
  setSelectedOptions,
}) {
  return (
    <SelectBox
      label={title}
      options={optionsList}
      value={selectedOptions}
      onChange={onChange()}
      hideInputFilter={true}
      listOptionProps={{nestedScrollEnabled: true}}
    />
  );

  function onChange() {
    return val => setSelectedOptions(val);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  multiSelect: {
    margin: 15,
  },
});
