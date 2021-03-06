import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormDetails from '../../../components/FormDetails/FormDetails';
import Status from '../../../components/Status/Status';
import { Colors, Paragraph, Checkbox } from 'apollo-react-native';
import { useFormikContext } from 'formik';

const PanelHeader = () => {
  const context = useFormikContext();
  const { values, setFieldValue } = context;

  return (
    <View style={styles.container}>
      <FormDetails title="Order Recipient">
        <Paragraph style={{ fontSize: 16 }}>
          {values.fields.user ? values.fields.user.Name : ''}
        </Paragraph>
      </FormDetails>
      <FormDetails title="Recipient Territory">
        <Paragraph style={{ fontSize: 16 }}>
          {values.fields.territory ? values.fields.territory.name : ''}
        </Paragraph>
      </FormDetails>
      <FormDetails title="Status">
        <Status size="large" status={values.fields.status} />
      </FormDetails>
      <FormDetails>
        <Checkbox
          onPress={() => setFieldValue('fields.isUrgent', !values.fields.isUrgent)}
          status={values.fields.isUrgent == true ? 'checked' : null}
          label="Is Urgent?"
        />
      </FormDetails>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.themeGrey[200],
  },
});

export default PanelHeader;
