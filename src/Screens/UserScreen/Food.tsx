/*eslint-disable*/
import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Loaction from '../../Components/Loaction';
import Carousel from '../../Components/Caurosal';
import RecipeCarousel from '../../Components/RecipeCourosal';
import ExploreRecipe from '../../Components/ExploreRecipe';
const Food = ({navigation}: any) => {
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
        {/*  Carousel card here*/}
        <Carousel />
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <RecipeCarousel />
        <ExploreRecipe />
        </View>
      </ScrollView>
    </View>
  );
};

export default Food;
/*eslint-disable*/
