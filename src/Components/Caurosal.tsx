/*eslint-disable*/
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Carousel = () => {
  const images = [
    'https://www.shutterstock.com/image-vector/delicious-hamburger-fries-banner-ads-260nw-1203026587.jpg',
    'https://i.pinimg.com/736x/81/cf/9c/81cf9cb42e84eec426a6bbacf6cb09c7.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/healthy-food-restaurant-banner-design-template-5d8526f015d6a01027536b17714b98d3_screen.jpg?ts=1662349433',
    'https://www.click4vector.com/public/uploads/small/11629046163w2x8tgswyd5mlb9gavjcjwhiaahuhzwtemv2wcytbdq2udbofj8u0mqdh5h3iaf7egm6nava5569409dfs87vfkdpk3s4bitmvaq.png',
    'https://i.pinimg.com/736x/1d/63/2b/1d632b206befb78543788669ca4a80f3.jpg',
  ];
  return (
    <View style={{marginTop: 17}}>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={'#52d358'}
        inactiveDotColor="#035d07"
        ImageComponentStyle={{
          borderRadius: 6,
          width: '90%',
          height: 150,
        }}
      />
    </View>
  );
};

export default Carousel;
/*eslint-disable*/
