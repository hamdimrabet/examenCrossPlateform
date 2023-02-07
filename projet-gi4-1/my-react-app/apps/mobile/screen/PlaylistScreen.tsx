import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image } from 'react-native';
import { UpNextButton, RoundButtonMusic, Cover ,Favorite } from '@my-workspace/my-ui'
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons';
import { color } from 'native-base/lib/typescript/theme/styled-system';
const PlaylistScreen = ({ navigation }) => {
  const [playlist] = useState([
    {
      name: 'adele',
      urlMp4: 'https://res.cloudinary.com/dgwn82vcv/video/upload/v1675727475/Adele_-_Rolling_in_the_Deep_Official_Music_Video_pjjo15.mp4',
      duration: 90,
      poster:
        'https://res.cloudinary.com/dgwn82vcv/image/upload/v1675720764/image/adel_fd3dkb.jpg',
    },

    {
      name: 'Eminem',
      urlMp4: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      duration: 4.30,
      poster:
        'https://res.cloudinary.com/dgwn82vcv/image/upload/v1675715208/image/Eminem_live_at_D.C._2014__cropped_oddnqa.jpg',
    },
    {
        name: 'Cheb hbitri',
        urlMp4: 'https://res.cloudinary.com/dgwn82vcv/video/upload/v1675727932/image/Cheb_Lahbitri_-_Manalqach_Kifak_%D9%85%D8%A7%D9%86%D9%84%D9%82%D8%A7%D8%B4_%D9%83%D9%8A%D9%81%D9%83_uxpr7b.mp4',
        duration: 110,
        poster:
          'https://res.cloudinary.com/dgwn82vcv/image/upload/v1675727801/image/hitri_gluph5.jpg',
      },
      {
        name: 'video 4',
        urlMp4: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        duration: 70,
        poster:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
      },
      {
        name: 'video 5',
        urlMp4: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        duration: 70,
        poster:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
      },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filteredPlaylist, setFilteredPlaylist] = useState(playlist);

  const handleSearch = text => {
    setSearchText(text);
    const filtered = playlist.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredPlaylist(filtered);
  };
 
  return (
    
    <View style={{flex: 1, width: 350, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center',borderRadius:25}}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10}}>My Trending</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchText}
          placeholder="Search for a video..."
        />
      </View>
    <View style={styles.container}>
    {filteredPlaylist.map((p, index) => {
  if (index % 2 === 0) {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home', { ...p })}>
          <View>
            <Cover  borderRadius={500}
                  size ={80}
                  width={350}
                  height={350}
                  imageUrl={p.poster} />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.followers}>duration :{p.duration}</Text>
          </View>
        </TouchableOpacity>
        {filteredPlaylist[index + 1] && (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home', { ...filteredPlaylist[index + 1] })}>
              
            <View>
            
              <Cover  borderRadius={200}
                    size ={80}
                    imageUrl={filteredPlaylist[index + 1].poster} />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{filteredPlaylist[index + 1].name}</Text>
              <Text style={styles.followers}>duration :{filteredPlaylist[index + 1].duration}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return null;
})}

      {/* {filteredPlaylist.map(p => {
        return (
            <TouchableOpacity 
            
            onPress={() => navigation.navigate('Home', { ...p })}>
              <View>
              <Cover  borderRadius={200}
                    size ={80}
                    imageUrl={p.poster} />
              </View>
              <View style={styles.info}>
                
            <Text style={styles.name}>{p.name}</Text>
            <View>

            </View>
            
            <Text style={styles.followers}> duration :{p.duration}</Text>
            </View>
         </TouchableOpacity>
        );
      })} */}
      {/* <Button title="Artiste" onPress={() => { navigation.navigate('Artiste'); }} /> */}
      
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>

    <View style={{marginRight: 20}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
    >
        <Entypo name="home" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>Home</Text>
    </TouchableOpacity>
    </View>
  <View></View>


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
     </View>
    
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: "#1F1D2B",
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    color:'white',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,

  },
  container: {
    padding: 20,
    backgroundColor: '#1F1D2B'
    
  },
  info: {
    justifyContent: 'center',
    color:'white'
  },
  followers: {
    fontSize: 14,
    color: 'white'
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
      justifyContent: 'center',
      flex: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
});

export default PlaylistScreen;