/*eslint-disable*/
import React, {useState} from 'react';
import {View, ToastAndroid,TextInput,Button} from 'react-native';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../../firebase/Config';
import Input from '../../Components/Input';

const EditScreen = ({route, navigation}: any) => {
  const {id, title, Category, type, discription, ingredient, image} = route.params;

  const [recipeTitle, setRecipeTitle] = useState(title || '');
  const [recipeCategory, setRecipeCategory] = useState(Category || '');
  const [recipeType, setRecipeType] = useState(type || '');
  const [recipeDiscription, setRecipeDiscription] = useState(discription || '');

  const handleSave = async () => {
    try {
      const recipeRef = doc(db, 'Addrecipes', id);
      await updateDoc(recipeRef, {
        title: recipeTitle,
        Category: recipeCategory,
        type: recipeType,
        discription: recipeDiscription,
        ingredient: JSON.stringify(ingredient || {}),
      });
      ToastAndroid.showWithGravityAndOffset(
        'Recipe updated successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      navigation.goBack();
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <View style={{marginTop: 50, gap: 10}}>
      <TextInput
        value={recipeTitle}
        onChangeText={text => setRecipeTitle(text)}
        placeholder="Title"
        placeholderTextColor="black"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          width: 340,
          color: 'black',
        }}
      />
      <TextInput
        value={recipeType}
        onChangeText={text => setRecipeType(text)}
        placeholder="Type"
        placeholderTextColor="black"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          width: 340,
          color: 'black',
        }}
      />
      <TextInput
        value={recipeCategory}
        onChangeText={text => setRecipeCategory(text)}
        placeholder="Category"
        placeholderTextColor="black"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          width: 340,
          color: 'black',
        }}
      />
      <TextInput
        value={recipeDiscription}
        onChangeText={text => setRecipeDiscription(text)}
        placeholder="Description"
        placeholderTextColor="black"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          width: 340,
          color: 'black',
        }}
      />
      <Button title='Update Reacipe'  onPress={handleSave} />
    </View>
  );
};

export default EditScreen;
/*eslint-disable*/
