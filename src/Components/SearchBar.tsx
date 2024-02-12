/*eslint-disable*/
import {View, TextInput, Image, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderAnim] = useState(new Animated.Value(1));

  const names = ['"Pizza"', '"Cake"', '"Biryani"'];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setPlaceholder(names[index]);
      Animated.timing(placeholderAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        placeholderAnim.setValue(1);
        index = (index + 1) % names.length;
      });
    }, 3500); 

    return () => clearInterval(interval);
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        width: 355,
        marginBottom:6,
      }}>
      <TextInput
        placeholder="Search for"
        placeholderTextColor="#7b7878"
        style={{flex: 1, paddingVertical: 10}}
      />
      <Animated.Text
        style={{
          opacity: placeholderAnim,
          position: 'absolute',
          top: 10,
          left: 15,
          fontSize: 16,
          color: 'gray',
          marginLeft:70,
          marginTop:2
        }}>
        {placeholder}
      </Animated.Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/search.png')}
          style={{width: 30, height: 30, marginRight: 4}}
        />
        <View style={{height: 28, borderWidth: 0.7, borderColor: 'gray'}} />
        <Image
          source={require('../assets/mic.png')}
          style={{width: 25, height: 25, marginLeft: 4}}
        />
      </View>
    </View>
  );
};
export default SearchBar;
/*eslint-disable*/
