/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {addDoc, collection, doc, onSnapshot, updateDoc} from 'firebase/firestore';
import {db,storage} from '../../firebase/Config';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getStorage,ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {Dropdown} from 'react-native-element-dropdown';
import InputText from '../../Components/Input';
// import ImagePicker from 'react-native-image-crop-picker';
import {
  launchImageLibrary,
  MediaType,
  ImageLibraryOptions,
} from 'react-native-image-picker';
// import AppendInputField from '../../Components/AppendInputField';

const AddRecipe = () => {
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [Category, setCategory] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState('');
  const [ingrediant, setIngrediant] = useState([{id: 1, value: ''}]);
  // console.log(selectedImage, '------------------1111');
  //dropdown field
  const CategoryData = [
    {label: 'Breakfast', value: 'Breakfast'},
    {label: 'Lunch', value: 'Lunch'},
    {label: 'Dinner', value: 'Dinner'},
    {label: 'Dessert', value: 'Dessert'},
  ];
  // get the current user
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      setUser(authUser);
    });
    return unsubscribe;
  }, []);
  // save data in firebase and clear the storage of local store
  const AddRecipeTofirebase = async () => {
    const user = getAuth().currentUser;
    let imageUrl: string | undefined;

    if (selectedImage) {
      const storageRef = ref(getStorage(), 'recipe-images/' + selectedImage.name);
      await uploadBytes(storageRef, selectedImage);
      imageUrl = await getDownloadURL(storageRef);
    }

    try {
      if (
        title === '' ||
        type === '' ||
        discription === '' ||
        Category === '' ||
        !selectedImage
      ) {
        Alert.alert(
          'Invalid Details',
          'Please fill in all the details and select an image',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          {cancelable: false},
        );
      } else {

        // Send data to firebase store
        const recipeData = {
          uid: user.uid,
          title,
          type,
          discription,
          Category,
          imageUrl,
          ingrediant,
        };

        const docRef = await addDoc(collection(db, 'Addrecipes'), recipeData);
        await updateDoc(docRef, {recipeId: docRef.id});

        // Show Toast message
        ToastAndroid.showWithGravityAndOffset(
          'Recipe is submitted!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );

        // Clear form fields
        setTitle('');
        setType('');
        setDiscription('');
        setCategory('');
        setIngrediant([{id: 1, value: ''}]);
        setSelectedImage(null);
      }
    } catch (error) {
      Alert.alert('Error during data submission:', error);
    }
  };
  // add ingrediant filed as per required
  const handleAddField = () => {
    const newInputFields = [
      ...ingrediant,
      {id: ingrediant.length + 1, value: ''},
    ];
    setIngrediant(newInputFields);
  };
  //remove after extra added filed ingrediant filed as per required
  const handleRemoveField = idToRemove => {
    const updatedFields = ingrediant.filter(field => field.id !== idToRemove);
    setIngrediant(updatedFields);
  };
  //update ingrediant data and store in state
  const handleChange = (text: any, id: any) => {
    const updatedFields = ingrediant.map(field =>
      field.id === id ? {...field, value: text} : field,
    );
    setIngrediant(updatedFields);
  };
  // image handler and send to Firebase Firestore
  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
      path: 'images',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('Image picker error: ' + response.error);
      } else if (response.assets && response.assets.length > 0) {
        let imageUri = response.assets[0].uri;
        setSelectedImage(imageUri);
      } else {
        Alert.alert('Image uri not found');
      }
    });
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#52d358', fontSize: 25, fontWeight: 'bold'}}>
            Add your Recipe
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="padding">
            <View style={{marginLeft: 25}}>
              <View style={styles.inputContainer}>
                <Text style={{color: '#000', marginLeft: -5}}>Recipe Name</Text>
                <InputText
                  value={title}
                  onChangeText={(text: string) => setTitle(text)}
                  placeholder="Enter Recipe Name"
                  placeholderTextColor="#aaa4a4"
                  keyboardType="default"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={{color: '#000', marginLeft: -3}}>Food Type</Text>
                <InputText
                  value={type}
                  onChangeText={(text: string) => setType(text)}
                  placeholder="Veg or Non-Veg"
                  placeholderTextColor="#aaa4a4"
                  keyboardType="default"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={{color: '#000', marginLeft: -10}}>
                  Select Category
                </Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={CategoryData}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Select item'}
                  value={Category}
                  onChange={item => {
                    setCategory(item.value);
                  }}
                />
              </View>
              <View style={{marginLeft: -13}}>
                <Text style={{color: '#000', marginLeft: 5}}>Description</Text>
                <InputText
                  value={discription}
                  onChangeText={(text: string) => setDiscription(text)}
                  placeholder="Add Description"
                  placeholderTextColor="#aaa4a4"
                  keyboardType="default"
                />
              </View>

              <View style={{marginTop: 20, marginLeft: 25}}>
                <Text style={{color: '#000', marginLeft: -35}}>
                  Add Ingredient
                </Text>
                <View style={{flexDirection: 'column', marginTop: -4}}>
                  {ingrediant.map((field, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                      }}>
                      <InputText
                        placeholder={`Ingredient ${index + 1}`}
                        value={field.value}
                        onChangeText={text => handleChange(text, index)}
                        style={{marginRight: 10}}
                      />
                      {index === ingrediant.length - 1 && (
                        <TouchableOpacity onPress={handleAddField}>
                          <Image
                            source={require('../../assets/add.png')}
                            style={{height: 40, width: 40}}
                          />
                        </TouchableOpacity>
                      )}
                      {index !== ingrediant.length - 1 && (
                        <TouchableOpacity
                          onPress={() => handleRemoveField(index)}>
                          <Image
                            source={require('../../assets/delete.png')}
                            style={{height: 40, width: 40}}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </View>
              </View>
              {/* image select */}
              <View>
                {selectedImage && (
                  <Image
                    source={{uri: selectedImage}}
                    style={{flex: 1}}
                    resizeMode="contain"
                  />
                )}
                <TouchableWithoutFeedback onPress={openImagePicker}>
                  <View
                    style={[
                      styles.imageContainer,
                      {marginTop: 20, marginLeft: -10},
                    ]}>
                    <Text>Choose From Device</Text>
                    <View style={{marginTop:5}}>
                      <Image 
                      source={require('../../assets/camera.png')}
                      style={{width:30, height:30}}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              {/* image */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={AddRecipeTofirebase}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>ADD RECIPE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    marginTop: 55,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#52d358',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    color: 'black',
  },

  dropdown: {
    marginTop: 5,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
    marginLeft: -15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2EEB37',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderRadius: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  imageContainer: {
    width: 300,
    height: 70,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddRecipe;
/*eslint-disable*/
