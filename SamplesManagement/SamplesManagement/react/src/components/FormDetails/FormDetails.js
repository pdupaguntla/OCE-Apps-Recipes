import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from 'apollo-react-native';

const FormDetails = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  title: {
    color: Colors.black[300],
    marginBottom: 5,
  },
});

export default FormDetails;
