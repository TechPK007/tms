import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import YardListing from './YardListing';

export default TableComp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [rowData, setRowData] = useState({});

  const data = [
    {
      id: 1,
      name: 'John',
      age: 25,
      gender: 'Male',
      occupation: 'Developer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'john@example.com',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane',
      age: 30,
      gender: 'Female',
      occupation: 'Designer',
      city: 'London',
      country: 'UK',
      phone: '+44-123-456-7890',
      email: 'jane@example.com',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Bob',
      age: 35,
      gender: 'Male',
      occupation: 'Manager',
      city: 'Tokyo',
      country: 'Japan',
      phone: '+81-123-456-7890',
      email: 'bob@example.com',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Alice',
      age: 40,
      gender: 'Female',
      occupation: 'Engineer',
      city: 'San Francisco',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'alice@example.com',
      status: 'Inactive',
    },
    {
      id: 5,
      name: 'Tom',
      age: 45,
      gender: 'Male',
      occupation: 'Consultant',
      city: 'Paris',
      country: 'France',
      phone: '+33-123-456-7890',
      email: 'tom@example.com',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Mary',
      age: 50,
      gender: 'Female',
      occupation: 'Entrepreneur',
      city: 'Sydney',
      country: 'Australia',
      phone: '+61-123-456-7890',
      email: 'mary@example.com',
      status: 'Inactive',
    },
    {
      id: 7,
      name: 'Mike',
      age: 55,
      gender: 'Male',
      occupation: 'Salesperson',
      city: 'Berlin',
      country: 'Germany',
      phone: '+49-123-456-7890',
      email: 'mike@example.com',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Sara',
      age: 60,
      gender: 'Female',
      occupation: 'Teacher',
      city: 'Toronto',
      country: 'Canada',
      phone: '+1-123-456-7890',
      email: 'sara@example.com',
      status: 'Inactive',
    },
    {
      id: 9,
      name: 'David',
      age: 65,
      gender: 'Male',
      occupation: 'Accountant',
      city: 'Mumbai',
      country: 'India',
      phone: '+91-123-456-7890',
      email: 'david@example.com',
      status: 'Active',
    },
    {
      id: 10,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 11,
      name: 'John',
      age: 25,
      gender: 'Male',
      occupation: 'Developer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'john@example.com',
      status: 'Active',
    },
    {
      id: 12,
      name: 'Jane',
      age: 30,
      gender: 'Female',
      occupation: 'Designer',
      city: 'London',
      country: 'UK',
      phone: '+44-123-456-7890',
      email: 'jane@example.com',
      status: 'Inactive',
    },
    {
      id: 13,
      name: 'Bob',
      age: 35,
      gender: 'Male',
      occupation: 'Manager',
      city: 'Tokyo',
      country: 'Japan',
      phone: '+81-123-456-7890',
      email: 'bob@example.com',
      status: 'Active',
    },
    {
      id: 14,
      name: 'Alice',
      age: 40,
      gender: 'Female',
      occupation: 'Engineer',
      city: 'San Francisco',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'alice@example.com',
      status: 'Inactive',
    },
    {
      id: 15,
      name: 'Tom',
      age: 45,
      gender: 'Male',
      occupation: 'Consultant',
      city: 'Paris',
      country: 'France',
      phone: '+33-123-456-7890',
      email: 'tom@example.com',
      status: 'Active',
    },
    {
      id: 16,
      name: 'Mary',
      age: 50,
      gender: 'Female',
      occupation: 'Entrepreneur',
      city: 'Sydney',
      country: 'Australia',
      phone: '+61-123-456-7890',
      email: 'mary@example.com',
      status: 'Inactive',
    },
    {
      id: 17,
      name: 'Mike',
      age: 55,
      gender: 'Male',
      occupation: 'Salesperson',
      city: 'Berlin',
      country: 'Germany',
      phone: '+49-123-456-7890',
      email: 'mike@example.com',
      status: 'Active',
    },
    {
      id: 18,
      name: 'Sara',
      age: 60,
      gender: 'Female',
      occupation: 'Teacher',
      city: 'Toronto',
      country: 'Canada',
      phone: '+1-123-456-7890',
      email: 'sara@example.com',
      status: 'Inactive',
    },
    {
      id: 19,
      name: 'David',
      age: 65,
      gender: 'Male',
      occupation: 'Accountant',
      city: 'Mumbai',
      country: 'India',
      phone: '+91-123-456-7890',
      email: 'david@example.com',
      status: 'Active',
    },
    {
      id: 20,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 21,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 22,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 23,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 24,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 25,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 26,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 27,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 28,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 29,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 30,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 31,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 32,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 33,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 34,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 35,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 36,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 37,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 38,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
    {
      id: 39,
      name: 'Amy',
      age: 70,
      gender: 'Female',
      occupation: 'Writer',
      city: 'New York',
      country: 'USA',
      phone: '+1-123-456-7890',
      email: 'amy@example.com',
      status: 'Inactive',
    },
  ];

  const pageSize = 10;
  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = rowData => {
    setRowData(rowData);
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <YardListing />
      <ScrollView horizontal>
        <View style={[styles.pagination]}>
          {Array.from({length: totalPages}).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePageClick(index + 1)}>
              <Text
                style={[
                  styles.page,
                  currentPage === index + 1 && styles.activePage,
                ]}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView scrollEnabled horizontal={true}>
        <View style={{height: 600}}>
          <View style={[styles.row, styles.headerColor]}>
            <Text style={[styles.header, {width: 50}]}>ID</Text>
            <Text style={[styles.header, {width: 100}]}>Name</Text>
            <Text style={[styles.header, {width: 100}]}>Age</Text>
            <Text style={[styles.header, {width: 100}]}>Gender</Text>
            <Text style={[styles.header, {width: 100}]}>Occupation</Text>
            <Text style={[styles.header, {width: 100}]}>City</Text>
            <Text style={[styles.header, {width: 100}]}>Country</Text>
            <Text style={[styles.header, {width: 200}]}>Phone</Text>
            <Text style={[styles.header, {width: 200}]}>Email</Text>
            <Text style={[styles.header, {width: 100}]}>Status</Text>
            <Text style={[styles.header, {width: 100}]}>Action</Text>
          </View>
          {data
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map(item => (
              <View key={item.id} style={[styles.row]}>
                <Text style={{width: 50}}>{item.id}</Text>
                <Text style={{width: 100}}>{item.name}</Text>
                <Text style={{width: 100}}>{item.age}</Text>
                <Text style={{width: 100}}>{item.gender}</Text>
                <Text style={{width: 100}}>{item.occupation}</Text>
                <Text style={{width: 100}}>{item.city}</Text>
                <Text style={{width: 100}}>{item.country}</Text>
                <Text style={{width: 200}}>{item.phone}</Text>
                <Text style={{width: 200}}>{item.email}</Text>
                <Text style={{width: 100}}>{item.status}</Text>
                <TouchableOpacity onPress={() => handleEditClick(item)}>
                  <Text style={[styles.action, {width: 100}]}>Edit</Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
      <Modal visible={showModal} animationType="fade" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Edit Row Data</Text>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>ID: {rowData.id}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Name: {rowData.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Age: {rowData.age}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Gender: {rowData.gender}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>
                Occupation: {rowData.occupation}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>City: {rowData.city}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>
                Country: {rowData.country}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Phone: {rowData.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Email: {rowData.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Status: {rowData.status}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.modalAction}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    textAlign: 'center',
    paddingHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  headerColor: {
    backgroundColor: 'blue',
  },

  fixedColumn: {
    width: 100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    alignItems: 'center',
    flex: 1,
  },
  action: {
    color: '#007AFF',
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 2,
    width: 30,
    borderColor: 'blue',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-start'
  },
  page: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    marginHorizontal: 3,
    borderRadius: 8,
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activePage: {
    backgroundColor: '#007AFF',
    color: 'white',
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
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  modalItemText: {
    fontSize: 16,
  },
  modalAction: {
    color: '#fff',
    backgroundColor: 'blue',
    textAlign: 'center',
    // textDecorationLine: 'underline',
    margin: 15,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 2,
    // width:30,
    borderColor: 'blue',
  },
});
