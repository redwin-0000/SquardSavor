/*eslint-disable*/
import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../Components/Card';
import Loaction from '../../Components/Loaction';
const Squardy = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f3eeee"
        translucent={true}
      />
      <Loaction />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
          }}>
          <Text style={{fontSize: 27, color: '#000', fontWeight: '400'}}>
            Welcome to Squardy!
            <Text style={{fontSize: 50}}>😋</Text>
          </Text>
        </View>
        {/*  recipe card here*/}
        <Card
          navigation={navigation}
          title="YOUR RECIPE"
          content="FROM GREAT RESTAURANTS"
          nextLine="NEAR YOU!"
          time="30-40"
          mins="Mins"
          ImageTitle="Image"
        />
        {/*  card here*/}
        <Card
          title="YOUR RECIPE"
          content="DAILY ESSENTIALS DELIVERED"
          nextLine="FAST!"
          time="10-12"
          mins="Mins"
          ImageTitle="Image"
        />
        <View style={{marginTop: 35, alignSelf: 'flex-start', marginLeft: 20}}>
          <Text style={{fontSize: 100, fontWeight: 'bold'}}>Live</Text>
          <Text style={{fontSize: 100, fontWeight: 'bold', marginTop: -50}}>
            it up!
          </Text>
          <Text style={{fontSize: 20}}>
            Crafted with {'❤️'} in Mohali, India
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Squardy;
/*eslint-disable*/
