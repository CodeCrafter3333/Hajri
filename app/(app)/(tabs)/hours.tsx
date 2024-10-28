import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


const Hours = () => {
  const [workHours, setWorkHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchWorkHours = async () => {
  //     try {
  //       // Fetch user's work hours from the backend or local storage
  //       // For the sake of this example, we're simulating fetching data
  //       const response = await fetch('http://your-api-url.com/work-hours');
  //       const data = await response.json();
  //       setWorkHours(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchWorkHours();
  // }, []);

  const tableHead = ['Date', 'Check In', 'Check Out', 'Worked Hours'];

  // const tableData = workHours.map(hour => [
  //   hour.date,
  //   hour.checkIn,
  //   hour.checkOut,
  //   hour.workedHours,
  // ]);

const tableData = [
  ['2022-01-01', '09:00 AM', '05:00 PM', '8 hours'],
  ['2022-01-02', '09:30 AM', '06:00 PM', '8.5 hours'],
  // Add more data as needed
];


  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default Hours;
