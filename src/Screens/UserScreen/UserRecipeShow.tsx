/*eslint-disable*/
import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  Share,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const UserRecipeShow = (recipe: any) => {
  const recipeData = recipe;
  const share = async () => {
    console.log('nsksdnj');
  };

  console.log(recipeData, 'kjsbdkjdsbcjd');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(100),
        // height:700,
        // top: 450,
        top:230
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#e2dfdf"
        translucent={true}
      />
      {/* <View
        style={{
          // flex:1,
          width: responsiveWidth(100),
          height: responsiveHeight(35),
          backgroundColor: '#e2dfdf',
          borderBottomStartRadius: 30,
          borderBottomEndRadius: 30,
          marginTop: -485,
        }}> */}
        <View style={{marginTop:-80}}>
          <Image
            source={require('../../assets/pureveg.jpg')}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(30),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontSize: responsiveFontSize(2), color: 'green'}}>
              {recipeData.recipe.type}
            </Text>
            <View style={{flexDirection: 'row', gap: 20}}>
              <Pressable onPress={share}>
                <Image
                  source={require('../../assets/share.png')}
                  style={{
                    width: responsiveWidth(6),
                    height: responsiveHeight(3),
                  }}
                />
              </Pressable>
              <Pressable onPress={share}>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{
                    width: responsiveWidth(6),
                    height: responsiveHeight(3),
                  }}
                />
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
            }}>
            {recipeData.recipe.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 10,
              gap: 30,
              top: 5,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: responsiveFontSize(2)}}>
              {' '}
              {recipeData.recipe.Category}
            </Text>
            <Text style={{fontSize: responsiveFontSize(2)}}>30 - 40 mins</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../../assets/star.png')}
                style={{width: responsiveWidth(6), height: responsiveHeight(3)}}
              />
              <Text style={{fontSize: responsiveFontSize(2)}}>4.4 Rating</Text>
            </View>
          </View>
        </View>
      {/* </View> */}
      {/* ingrediant display  */}
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <View style={{minHeight: '100%'}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Recipe Ingredients
          </Text>
          {recipeData.recipe.ingrediant.map((item: any, id: any) => (
            <View key={id} style={{marginTop: 10}}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/square.png')}
                  style={{
                    width: responsiveWidth(4.2),
                    height: responsiveHeight(2.2),
                  }}
                />
                <Text
                  style={{fontSize: responsiveFontSize(2), fontWeight: '500'}}>
                  {item.value}
                </Text>
              </View>
            </View>
          ))}
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text
              style={{fontSize: responsiveFontSize(2.5), fontWeight: 'bold'}}>
              Recipe Description
            </Text>
            <View
              style={{
                width: responsiveWidth(90),
                backgroundColor: 'green',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  paddingHorizontal: 10,
                  
                }}>
                {recipeData.recipe.discription}
              </Text>
            </View>
          </View>
          {/* Add extra space at the bottom to ensure scroll */}
          <View style={{height: 100}}></View>
        </View>
      </View>
    </View>
  );
};

export default UserRecipeShow;
/*eslint-disable*/
