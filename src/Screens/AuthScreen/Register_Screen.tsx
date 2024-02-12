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
  Alert,
  TouchableWithoutFeedback,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase/Config';
import {addDoc, collection} from 'firebase/firestore';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Register_Screen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [checkboxStates, setCheckboxStates] = useState([false, false]);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

    const handleCheckBoxClick = (index: number) => {
      const newCheckboxStates = [false, false];
      newCheckboxStates[index] = true;
  
      setCheckboxStates(newCheckboxStates);
  
      if (index === 0) {
        setRole('Admin');
      } else if (index === 1) {
        setRole('User');
      } else {
        setRole('');
      }
    };
  
    const register = async () => {
      try {
        setLoading(true);
        if (!name || !email || !password || !contact) {
          // Alert.alert('Invalid Details', 'Please fill all the details', [
          //   { text: 'OK', onPress: () => console.log('OK Pressed') },
          // ]);
          ToastAndroid.showWithGravity(
            'Please Fill All The Fields',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        } else if (!role) {
          // Alert.alert('Select the role', 'Select either Admin or User role', [
          //   { text: 'OK', onPress: () => console.log('OK Pressed') },
          // ]);
          ToastAndroid.showWithGravity(
            'Select Admin or User On Role Base',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        } else {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
  
          if (userCredential.user) {
            await addDoc(collection(db, 'users'), {
              uid: userCredential.user.uid,
              name,
              email,
              contact,
              role,
            });
            navigation.navigate('Login');
          }
        }
      } catch (error) {
        Alert.alert('Error during registration:', error.message);
      } finally {
        setLoading(false);
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
              marginTop: 20,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color:'#52d358'}}>
              Create your Account
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Image
                source={require('../../assets/user.png')}
                style={{width: 20, height: 20, marginTop: 5}}
              />
              <TextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="UserName"
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
                secureTextEntry={true}
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
                source={require('../../assets/telephone.png')}
                style={{width: 20, height: 20, marginTop: 10}}
              />
              <TextInput
                value={contact}
                onChangeText={text => setContact(text)}
                placeholder="Phone No."
                placeholderTextColor="black"
                keyboardType="numeric"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginLeft: 10,
                  color:'black'
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableWithoutFeedback
               onPress={() => handleCheckBoxClick(0)}>
                <View style={styles.checkboxWrapper}>
                  <View
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: checkboxStates[0]
                          ? 'green'
                          : 'transparent',
                      },
                    ]}
                  />
                  <Text style={{fontSize: 15, marginLeft: 10, color:'black'}}>Admin</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 20}}>
                <TouchableWithoutFeedback
                  onPress={() => handleCheckBoxClick(1)}>
                  <View style={styles.checkboxWrapper}>
                    <View
                      style={[
                        styles.checkbox,
                        {
                          backgroundColor: checkboxStates[1]
                            ? 'green'
                            : 'transparent',
                        },
                      ]}
                    />
                    <Text style={{fontSize: 15, marginLeft: 10, color:'black'}}>User</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            {/* button */}
            <Pressable onPress={register}>
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
                  Register
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.goBack()}>
              <View style={{marginTop: 20}}>
                <Text style={{ color:'#0d5811'}}>Already have an Account? Sign In</Text>
              </View>
            </Pressable>
            {loading && (
             <View>
              <Text style={{ color:'black'}}>Wait a second Loading...</Text>
             </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
  },
});
export default Register_Screen;
/*eslint-disable*/