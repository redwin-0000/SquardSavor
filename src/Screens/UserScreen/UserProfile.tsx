/*eslint-disable*/
import { Button,View, Text, StatusBar, Dimensions, Pressable,ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {getAuth, onAuthStateChanged,signOut} from 'firebase/auth';
import {ToastAndroid} from 'react-native';

const UserProfile = (navigation) => {
  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;
  const [userId, setUserId] = useState<any>([]);
  const [user, setUser] = useState([]);
  //get data from store
  const UserDetails = useSelector((state: any) => state.UserSlice.user,);
  //get current user id
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      setUserId(authUser);
    });
    return unsubscribe;
  }, []);
  // get current user details
  const validUser = userId
  ? UserDetails.filter(item => item.uid === userId.uid)
  : [];
  // console.log(validUser,'userid check')
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        ToastAndroid.showWithGravityAndOffset(
          'Successfully Sign Out',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      })
      .catch(error => {
        ToastAndroid.showWithGravityAndOffset(
          'Log Out error',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      });
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  const signIn = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={true}
      />
      <View style={{ width: Width }}>
        {/*  */}
        <View style={{top:-40, width:Width-20}}>
        {validUser.map((item: any, i: number) =>( 
          <View key={i} style={{padding:20}}>
            <Text style={{color:'#000', fontWeight:'bold', fontSize:15}}>{item.name}</Text>
         <View style={{flexDirection:'row', top:7}}>
         <Text style={{color:'#000',fontSize:15,fontWeight:'400'}}>+91-{item.contact} {'-'}</Text>
         <Text style={{color:'#000',fontSize:15,fontWeight:'400'}}>{' '}{item.email}</Text>
         </View>
         <Text style={{color:'#20d82c', fontWeight:'bold', fontSize:15,top:10}}>Edit Profile {'>'}</Text>
         <View style={{width:Width-42,marginLeft:22, height:1, borderWidth:1, borderColor:'black',position:'absolute', marginTop:95}}/>
          </View>
          ))}
         {/*  */}
         <View style={{left:20,marginTop:15}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>My Account</Text>
          <Text style={{fontWeight:'500'}}>Favourites, Hidden Restaurants & Setting</Text>
          <View style={{width:Width-42, height:1, borderWidth:0.5, borderColor:'black',position:'absolute', marginTop:55}}/>
        </View>
         {/*  */}
         <View style={{left:20, marginTop:25}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>Addresses</Text>
          <Text style={{fontWeight:'500'}}>Share, Edit & Add New Address</Text>
          <View style={{width:Width-42, height:1, borderWidth:0.5, borderColor:'black',position:'absolute', marginTop:55}}/>
        </View>
         {/*  */}
         <View style={{left:20,marginTop:25}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>My Account</Text>
          <Text style={{fontWeight:'500'}}>Favourites, Hidden Restaurants & Setting</Text>
          <View style={{width:Width-42, height:1, borderWidth:0.5, borderColor:'black',position:'absolute', marginTop:55}}/>
        </View>
         {/*  */}
         <View style={{left:20,marginTop:25}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>My Account</Text>
          <Text style={{fontWeight:'500'}}>Favourites, Hidden Restaurants & Setting</Text>
          <View style={{width:Width-42, height:1, borderWidth:0.5, borderColor:'black',position:'absolute', marginTop:55}}/>
        </View>
         {/*  */}
         <View style={{left:20, marginTop:25}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>My Account</Text>
          <Text style={{fontWeight:'500'}}>Favourites, Hidden Restaurants & Setting</Text>
        </View>
        {/* log out button */}
        <View style={{marginLeft:17}}>
        {user ? (
          <Pressable onPress={logout}>
          <View
            style={{
              marginTop: 50,
              backgroundColor: '#2EEB37',
              width: Width - 35,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
              LOG OUT
            </Text>
          </View>
        </Pressable>
        ) : (
          <Pressable onPress={signIn}>
              <View
                style={{
                  marginTop: 50,
                  backgroundColor: '#2EEB37',
                  width: Width - 35,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
                  SIGN IN
                </Text>
              </View>
            </Pressable>
        )}
      </View>
        </View>
      </View>
      </View>
  );
};

export default UserProfile;
/*eslint-disable*/
