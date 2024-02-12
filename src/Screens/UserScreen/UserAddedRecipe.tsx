/*eslint-disable*/
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {doc, deleteDoc} from 'firebase/firestore';
import {db} from '../../firebase/Config';
import Profile from '../../Components/Profile';
import SearchBar from '../../Components/SearchBar';
import {ToastAndroid} from 'react-native';

const UserAddedRecipe = ({onDelete, navigation}: any) => {
  const Width = Dimensions.get('window').width;
  const [userId, setUserId] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const UserRecipe = useSelector((state: any) => state.RecipeSlice.recipe);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      setUserId(authUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const topRatedRecipe = userId
    ? UserRecipe.filter((item: any) => item.uid === userId.uid)
    : [];
  console.log(topRatedRecipe, 'scdsc');

  // delete function
  const handleDelete = async recipeId => {
    try {
      const recipeRef = doc(db, 'Addrecipes', recipeId);
      await deleteDoc(recipeRef);
      if (onDelete && typeof onDelete === 'function') {
        onDelete();
      }
      ToastAndroid.showWithGravityAndOffset(
        'Recipe is deleted!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } catch (error) {
      Alert.alert('Error during deleting users id:', error);
    }
    // console.log('delete')
  };
  // edit handler
  const editHandler = ({
    id,
    type,
    Category,
    title,
    discription,
    ingrediant,
    image,
  }: any) => {
    // console.log('edit', category);
    navigation.navigate('Edit', {
      id,
      type,
      Category,
      title,
      discription,
      ingrediant,
      image,
    });
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f3eeee"
        translucent={true}
      />
      {/* <Loaction /> */}
      <View style={{marginTop: 60}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
            Your Added Recipes
          </Text>
          <Profile />
        </View>
        <View style={{marginTop: 13}}>
          <SearchBar />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{left: 15, marginTop: 10}}>
          {topRatedRecipe.map((item: any, i: number) => (
            <View key={i} style={{marginTop: 10}}>
              <View style={{marginTop: -1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Width,
                    height: 160,
                    gap: 15,
                  }}>
                  <Image
                    //  source={item.imageUrl ? {uri: item.imageUrl} : require('../../assets/dishImage.jpeg')}
                    source={require('../../assets/dishImage.jpeg')}
                    style={{width: 200, height: 150, borderRadius: 10}}
                  />
                  <View style={{top: 10}}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                      {item.type}
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                      {item.title}
                    </Text>
                    <View style={{flexDirection: 'row', gap: 5}}>
                      <Image
                        source={require('../../assets/star.png')}
                        style={{width: 20, height: 20}}
                      />
                      <Text style={{color: '#000', fontWeight: 'bold'}}>
                        4.6- 20-25 mins
                      </Text>
                    </View>
                    <Text>{item.Category}</Text>
                    {/* edit and delete button */}
                    <View style={{flexDirection: 'row', gap: 15, top: 10}}>
                      <Pressable
                        // style={styles.editbtn}
                        onPress={() =>
                          editHandler({
                            // collectionName: weaklymeal,
                            id: item.recipeId,
                            type: item.type,
                            title: item.title,
                            Category: item.Category,
                            discription: item.discription,
                            ingrediant: item.ingrediant ,
                            image: item.imageUrl,
                          })
                        }>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#52d358',
                            padding: 6,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text>Edit</Text>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => handleDelete(item?.recipeId)}>
                        <View
                          style={{
                            width: 60,
                            backgroundColor: 'red',
                            padding: 6,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text>Delete</Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserAddedRecipe;
/*eslint-disable*/
