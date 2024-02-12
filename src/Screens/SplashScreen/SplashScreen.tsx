/*eslint-disable*/
import {View, Image} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {collection, onSnapshot} from 'firebase/firestore';
import {db} from '../../firebase/Config';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/Slice/UserAuthSlice';
import {UserRecipe} from '../../redux/Slice/RecipeSlice';
const SplaceScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const RegisterUser = collection(db, 'users');
    onSnapshot(RegisterUser, users => {
      const RegisterUserData: any = users.docs.map((users: any) => {
        return users.data();
      });
      dispatch(addUser(RegisterUserData));
    });

    // user add recipe
    const addedRecipeData = collection(db, 'Addrecipes');
    onSnapshot(addedRecipeData, (recipes: any) => {
      const storeAddedRecipeData = recipes.docs.map((recipe: any) => recipe.data());
      dispatch(UserRecipe(storeAddedRecipeData));
    });
  }, [dispatch]);

  //screen navigation through useEffect
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: 300, aspectRatio: 1}}>
        <View style={{backgroundColor: 'green', borderRadius: 150}}>
          <Image
            source={require('../../assets/Squardy.png')}
            style={{marginLeft: -20, marginTop: -20}}
          />
        </View>
      </View>
    </View>
  );
};

export default SplaceScreen;

/*eslint-disable*/
