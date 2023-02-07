import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { NavigationTab } from '@my-workspace/my-ui'
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons';
import { Flex } from 'native-base';

const ProfilePage= ({ navigation }) => {
  return (
    <View style={{flex: 1, width: 350, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center',borderRadius:25}}>
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
           source={require('../assets/splash2.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Hamdi Mrabet </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>Hamdimrabet5@email.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>+21600000</Text>
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>

    <View style={{marginRight: 20}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
    >
        <Entypo name="home" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>Home</Text>
    </TouchableOpacity>
    </View>
    <View style={{width: 20}}/>

    <View style={{marginRight: 40}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Artiste')}
    >
        <Entypo name="folder-video" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Artiste</Text>
    </TouchableOpacity>
    </View>

    <View style={{width: 20}}/>

    <View style={{marginRight: 50}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
    >
        <Ionicons name="md-person-sharp" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Profile</Text>
    </TouchableOpacity>
    </View>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    color:'white'
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color:'white'
    
  },
  infoValue: {
    fontSize: 16,
    color:'white'
  },
});

export default ProfilePage;