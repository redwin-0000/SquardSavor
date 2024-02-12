/*eslint-disable*/
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Profile from '../Components/Profile';
import SearchBar from './SearchBar';

const Loaction = (navigation: any) => {
  return (
    <>
      <View style={{flexDirection: 'row', marginTop: 60, marginBottom: 10}}>
        <TouchableWithoutFeedback>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/loaction.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{marginLeft: 5}}>Sector 74</Text>
            </View>
            <Text>Phase 8B Sectore 74, Shahimajra SAS Nagar, Mo...</Text>
          </View>
        </TouchableWithoutFeedback>
       <View style={{right:-4.2}}>
       <Profile  navigation={navigation}/>
       </View>
      </View>
      <SearchBar />
    </>
  );
};

export default Loaction;
/*eslint-disable*/
