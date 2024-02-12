/*eslint-disable*/
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import UserRecipeShow from '../Screens/UserScreen/UserRecipeShow';

const ExploreRecipe = () => {
  const Width = Dimensions.get('window').width;
  const UserRecipe = useSelector((state: any) => state.RecipeSlice.recipe);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openRecipeDetails = (recipeData: any) => {
    setSelectedRecipe(recipeData);
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{left: 15, marginTop: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000', left: -2}}>
        150+ Recipe to explore
      </Text>
      {UserRecipe.map((item: any, i: number) => (
        <Pressable
          key={i}
          onPress={() => openRecipeDetails(item)}
          style={{marginTop: 10}}>
          <View style={{marginTop: -1}}>
            <View
              style={{
                flexDirection: 'row',
                width: Width,
                height: 160,
                gap: 15,
              }}>
              <Image
                // source={item.imageUrl ? {uri: item.imageUrl} : require('../assets/dishImage.jpeg')}
                source={require('../assets/dishImage.jpeg')}
                style={{width: 200, height: 150, borderRadius: 10}}
              />
              <View style={{top: 30}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  {item.type}
                </Text>
                <Text style={{fontSize: 15, fontWeight: '500'}}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Image
                    source={require('../assets/star.png')}
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#000', fontWeight: 'bold'}}>
                    4.6 - 20-25 mins
                  </Text>
                </View>
                <Text>{item.Category}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <UserRecipeShow recipe={selectedRecipe} />
              <Pressable
                onPress={toggleModal}
                style={{position: 'absolute', top: 20, left: 15}}>
                <Image
                  source={require('../assets/back.png')}
                  style={{width: 30, height: 30}}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height:600
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 395,
    height: 780,
  },
});

export default ExploreRecipe;
/*eslint-disable*/
