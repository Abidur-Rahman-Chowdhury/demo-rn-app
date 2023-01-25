import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
export default function HomeScreens(props) {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginTop: 20, paddingLeft: 20, paddingRight: 20}}>
      {/* first section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          paddingBottom: 30,
        }}>
        <View style={{flex: 3}}>
          <View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
              মোট বকেয়া
            </Text>
            <Text style={{fontSize: 35, color: 'red'}}>০.০০</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
              মোট আদায়কৃতঃ
            </Text>
            <Text style={{fontSize: 35, color: 'green'}}>০.০০</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 100,
              borderColor: 'gray',
              width: 2,
              borderRightColor: 'gray',
              borderRightWidth: 2,
              marginRight: 40,
            }}></View>
        </View>
        <View>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            মোট বকেয়াকারীঃ
          </Text>
          <Text style={{fontSize: 35, color: 'black'}}>০</Text>
        </View>
      </View>

      {/* second section */}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <View
          style={{
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            backgroundColor: '#9a9a9a',
            width: 150,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 3,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            বকেয়াকারী
          </Text>
        </View>
        <View
          style={{
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            backgroundColor: '#a7a7a7 ',
            width: 150,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 3,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            পরিশোধকারী
          </Text>
        </View>
      </View>

      {/* third section */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginLeft: 10, text: 'center'}}>
          <Text>এই মুহুর্তে আপনার কোন বকেয়া নেই।</Text>
          <Text>নতুন বকেয়াকারী এড করতে হলে + বাটন টি চাপুন</Text>
          <Text>এবং প্রয়োজনীয় তথ্য পূরণ করুন</Text>
        </View>
      </View>

      {/* last section */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: '#850101',
                }}>
                <Icon
                  name="plus"
                  style={{fontSize: 20, fontWeight: '100', color: 'white'}}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
