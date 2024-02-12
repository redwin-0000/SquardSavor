/*eslint-disable*/
import React, {useState} from 'react';
import {View, Pressable, Image, Modal, Text} from 'react-native';
import UserProfile from '../Screens/UserScreen/UserProfile';
const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Pressable onPress={toggleModal}>
        <View
          style={{
            backgroundColor: '#f0eeee',
            width: 30,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </Pressable>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <UserProfile />
            <View style={{top: -690, marginLeft: 15}}>
              <Pressable onPress={toggleModal}>
                <Image
                  source={require('../assets/back.png')}
                  style={{width: 30, height: 30}}
                />
              </Pressable>
              <View
                style={{
                  position: 'absolute',
                  // top: -110,
                  marginLeft: 310,
                  backgroundColor: '#b7eaba',
                  width: 50,
                  borderRadius: 15,
                }}>
                <Pressable>
                  <Text
                    style={{
                      padding: 7,
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#2d6f31',
                      left: 2,
                    }}>
                    Help
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
/*eslint-disable*/
