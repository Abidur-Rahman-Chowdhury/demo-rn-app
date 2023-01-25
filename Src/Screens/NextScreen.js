import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './Contact';

export default function NextScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll().then(contacts => {
        setContacts(contacts);
      });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }).then(() => {
        Contacts.getAll().then(contacts => {   
          setContacts(contacts);
          
        });
      });
    }
  }, []);


  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
   
    <>
      <View style={{flexDirection:'row', paddingBottom:10, paddingTop:10, borderBottomWidth:1, borderBottomColor: 'gray' ,marginBottom:10}}>
        <Text style={{paddingLeft:20,fontSize:20, fontWeight:'bold',color:'black'}}>সকল কন্টাক্টস</Text>
        <Text style={{paddingLeft:20,fontSize:20, color:'black', fontWeight:'100'}}> ডেমো অ্যাপ কন্টাক্টস</Text>
      </View>
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
      />
     </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginLeft: 20
    
  },
});
