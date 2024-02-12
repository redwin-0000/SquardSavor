/*eslint-disable*/
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase/Config';
import {collection, query, where, getDocs} from 'firebase/firestore';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SignIn_Screen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    if (email === '' || password === '') {
      Alert.alert(
        'Invalid Details',
        'Please fill all the details',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          setLoading(false);
          const user = userCredential.user;
          // query in collection for get the role and navigate on role base
          const userRole = query(
            collection(db, 'users'),
            where('email', '==', email),
          );
          const getUserRole = await getDocs(userRole);
          const userData = getUserRole.docs[0].data();
          if (userData) {
            const Role = userData.role;
            if (Role === 'User') {
              navigation.navigate('UserHome');
            } else if (Role === 'Admin') {
              navigation.navigate('Admin');
            }
          } else {
            // Alert.alert('User data not found in Firestore');
            ToastAndroid.showWithGravity(
              'User Data Not Found!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
        })
        .catch(error => {
          setLoading(false);
          Alert.alert(
            'Login Failed',
            `Error: ${error.message}`,
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            {cancelable: false},
          );
          Alert.alert('Login error:', error);
        });
    }
  };

  return (
    <View style={{backgroundColor: 'gray', flex: 1}}>
      <KeyboardAvoidingView>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="gray"
          translucent={true}
        />
        <View
          style={{
            backgroundColor: 'white',
            height: Height - 200,
            width: Width - 20,
            marginLeft: 10,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: 240,
            position: 'absolute',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color:'#52d358'}}>Sign In</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Image
                source={require('../../assets/mail.png')}
                style={{width: 20, height: 20, marginTop: 10}}
              />
              <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="default"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginLeft: 10,
                  color:'black'
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
                
              }}>
              <Image
                source={require('../../assets/key.png')}
                style={{width: 20, height: 20, marginTop: 10}}
              />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="black"
                keyboardType="default"
                secureTextEntry={true}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginLeft: 10,
                  color:'black'
                }}
              />
            </View>
            {/* button */}
            <Pressable onPress={login}>
              <View
                style={{
                  marginTop: 40,
                  backgroundColor: '#2EEB37',
                  width: Width - 60,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
                  Submit
                </Text>
              </View>
            </Pressable>
            {loading && (
              <View>
                <Text style={{ color:'black'}}>Wait a second Loading...</Text>
              </View>
            )}
            <Pressable onPress={() => navigation.navigate('Register')}>
              <View style={{marginTop: 20}}>
                <Text style={{ color:'#0d5811'}}>You don,t have an Account? Sign Up</Text>
              </View>
            </Pressable>
           
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn_Screen;
/*eslint-disable*/
