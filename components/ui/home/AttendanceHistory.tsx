import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AttendanceData {
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

interface PastAttendanceProps {
  attendanceData: AttendanceData[];
}

const PastAttendance: React.FC<PastAttendanceProps> = ({ attendanceData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Past Attendance</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Status</Text>
        </View>
          {attendanceData.map((data, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableData}>{data.date}</Text>
            <Text style={styles.tableData}>{data.status}</Text>
          </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    flexDirection: 'column',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableData: {
    flex: 1,
  },
});

export default PastAttendance;
