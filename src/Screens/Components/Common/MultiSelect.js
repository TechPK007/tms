import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

// Options data must contain 'item' & 'id' keys

export default function MultiSelect({
  title,
  optionsList,
  selectedOptions,
  setSelectedOptions,
}) {
  return (
    <SelectBox
      label={title}
      options={optionsList}
      selectedValues={selectedOptions}
      onMultiSelect={onMultiChange()}
      onTapClose={onMultiChange()}
      isMulti
      listOptionProps={{nestedScrollEnabled: true}}
      optionContainerStyle={styles.optionContainerStyle}
    />
  );

  function onMultiChange() {
    return item => setSelectedOptions(xorBy(selectedOptions, [item], 'id'));
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
    position: 'relative',
    zIndex: 1,
  },
  multiSelect: {
    margin: 15,
  },
  optionContainerStyle: {
    paddingLeft: 10,
    paddingRight: 30,
  },
});
