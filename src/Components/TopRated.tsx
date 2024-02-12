/*eslint-disable*/
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const TopRated = ({navigation}: any) => {
  const TopRatedRecipe = useSelector((state: any) => state.RecipeSlice.recipe);

  return (
    <View style={{flex: 1, marginTop: 30}}>
      <Text
        style={{
          color: '#000',
          marginLeft: 20,
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        Top Rated Recipes
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}>
        {TopRatedRecipe.map((item: any, i: number) => (
          <Pressable onPress={() => navigation.navigate('MyRecipe')}>
            <View key={i} style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 160,
                  width: 150,
                  borderRadius: 20,
                  left: 10,
                  marginRight: 10,
                }}>
                <Image
                  // source={item.imageUrl ? {uri: item.imageUrl} : require('../assets/dishImage.jpeg')}
                  source={require('../assets/dishImage.jpeg')}
                  style={{height: 160, width: 150, borderRadius: 20}}
                />
              </View>
              <View style={{marginTop: 10, marginRight: 15, left: 13}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 19}}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Image
                    source={require('../assets/star.png')}
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#000', fontWeight: 'bold'}}>
                    4.6 20-25 mins
                  </Text>
                </View>
                <Text style={{color: '#5a5858', fontWeight: '400'}}>
                  {item.Category}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopRated;
/*eslint-disable*/
