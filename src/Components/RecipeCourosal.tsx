/*eslint-disable*/
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import TopRated from './TopRated';
import Image1 from '../assets/pizza.webp';
import Image2 from '../assets/northIndiafood.jpeg';
import Image3 from '../assets/southINdia.jpeg';
import Image4 from '../assets/idli.jpeg';
import Image5 from '../assets/burgur.jpeg';
import Image6 from '../assets/paratha.webp';
import Image8 from '../assets/cholebature.jpg';
import Image9 from '../assets/biryani.jpg';
import Image10 from '../assets/rolls.webp';
import Image11 from '../assets/pasta.webp';
import Image12 from '../assets/pureveg.jpg';
import Image13 from '../assets/pavbhaji.jpg';
import Image14 from '../assets/northIndian.jpg';
import Image15 from '../assets/pureveg.jpg';
import Image16 from '../assets/chiise.webp';

const RecipeCarousel = ({navigation}: any) => {
  const foodName = [
    {
      Name: 'Pizza',
      Image: Image1,
    },
    {
      Name: 'North Indian',
      Image: Image2,
    },
    {
      Name: 'South Indian',
      Image: Image3,
    },
    {
      Name: 'Idli',
      Image: Image4,
    },
    {
      Name: 'Burger',
      Image: Image5,
    },
    {
      Name: 'Paratha',
      Image: Image6,
    },
    {
      Name: 'Chole Bhature',
      Image: Image8,
    },
    {
      Name: 'Biryani',
      Image: Image9,
    },
    {
      Name: 'Rolls',
      Image: Image10,
    },
    {
      Name: 'Pasta',
      Image: Image11,
    },
    {
      Name: 'Pure Veg',
      Image: Image12,
    },
    {
      Name: 'Pav Bhaji',
      Image: Image13,
    },
    {
      Name: 'Dosa',
      Image: Image14,
    },
    {
      Name: 'Pure Veg',
      Image: Image15,
    },
    {
      Name: 'Chinese',
      Image: Image16,
    },
  ];

  return (
    <>
      <View style={{marginTop: 25}}>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: -80,
          }}>
          UserName, what's on your mind?
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 15}}>
        {foodName.map((item: any, i: number) => (
          <View key={i} style={{flexDirection: 'row'}}>
            <View style={[styles.itemContainer, {marginRight: 5, left: 10}]}>
              <Image source={item.Image} style={styles.image} />
              <Text style={styles.text}>{item.Name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TopRated navigation={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    // marginRight: 5,
    // alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: -10,
    width: 100,
  },
});

export default RecipeCarousel;
/*eslint-disable*/
