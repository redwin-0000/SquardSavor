/*eslint-disable*/
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';

const Card = ({navigation,title, content, nextLine, time, mins, ImageTitle}: any) => {
  return (
    <>
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate('Food')}>
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Text style={styles.content}>{nextLine}</Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#52d358',
              width: 100,
              borderRadius: 10,
              padding: 5,
              marginTop: 15,
            }}>
            <Text style={styles.content}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>{time}</Text>{' '}
              {mins}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/dishImage.jpeg')}
            style={{width: 100, height: 90, borderRadius: 15}}
          />
          <Text>{ImageTitle}</Text>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
</>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
});

export default Card;
/*eslint-disable*/
