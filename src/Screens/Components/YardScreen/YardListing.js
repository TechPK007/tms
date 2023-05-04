import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default YardListing = () => {
  const [showModal, setShowModal] = useState(false);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Error!
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.actionBtn, {marginTop: 9}]}>
        <TouchableOpacity onPress={() => setShowModal()}>
          <Text style={[styles.modalAction]}>Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Text style={[styles.modalAction]}>Download</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} animationType="fade" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Upload Data</Text>
            <TouchableHighlight
              style={styles.fileUpload}
              onPress={pickDocument}>
              <Text style={styles.textFile}>Select a file</Text>
            </TouchableHighlight>
            <View style={styles.actionBtn}>
              <TouchableOpacity onPress={() => setShowModal()}>
                <Text style={[styles.modalAction]}>Save</Text>
              </TouchableOpacity>
              <View style={styles.spacing} />
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={[styles.modalAction, {backgroundColor: 'red'}]}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    padding: 10,
  },
  modalAction: {
    color: '#fff',
    backgroundColor: 'blue',
    textAlign: 'center',
    // textDecorationLine: 'underline',
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    width: 90,
    borderRadius: 5,
    borderWidth: 2,
    // width:30,
    borderColor: 'blue',
  },
  fileUpload: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    marginHorizontal: 18,
    marginVertical: 8,
  },
  textFile: {
    padding: 5,
    fontSize: 18,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  spacing: {
    width: 35,
  },
});
