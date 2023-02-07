import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React ,{ useState } from 'react'

import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons';
import {  Cover} from "@my-workspace/my-ui";
const ArtisteScreen = ({navigation}) => {
    const listArtiste = [{
        name1: "Jenny Wilson",
        followers1: "694, 856 Followers",
        image1: "-----.png"
    }]

    const [listArtiste1] = useState([
            {

                name : "Jenny Wilson",
                followers : "694, 856 Followers",
                image :"https://res.cloudinary.com/dgwn82vcv/image/upload/v1675720521/image/jhon_wenton_ps1pa8.jpg"

            },
            {
                name : "Adel",
                followers : "542, 123 Followers",
                image : "https://res.cloudinary.com/dgwn82vcv/image/upload/v1675720764/image/adel_fd3dkb.jpg"
            },
            {
                name : "Eminem",
                followers : "2,000,000 Followers",
                image : "https://res.cloudinary.com/dgwn82vcv/image/upload/v1675715208/image/Eminem_live_at_D.C._2014__cropped_oddnqa.jpg"
            },
        {
            name : "balti",
            followers : "2,000,000 Followers",
            image : "https://res.cloudinary.com/dgwn82vcv/image/upload/v1675720619/image/baltui_bla9od.jpg"
        }
        ]);
        const [searchText, setSearchText] = useState('');
        const [filteredPlaylist, setFilteredPlaylist] = useState(listArtiste1);

        const handleSearch = text => {
            setSearchText(text);
            const filtered = listArtiste1.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setFilteredPlaylist(filtered);
        };

    const splitDataIntoTwo = (data) => {
        let array2D = [];
        let innerArray = [];

        data.forEach((item, index) => {
            innerArray.push(item);

            if (index % 2 === 1 || index === data.length - 1) {
                array2D.push(innerArray);
                innerArray = [];
            }
        });

        return array2D;
    };
 const twoByTwoData = splitDataIntoTwo(listArtiste1);

        return (
            <View style={{flex: 1, width: 350, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center',borderRadius:25}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10}}>les artiste</Text>
                </View>

                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                    <View >
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={handleSearch}
                            value={searchText}
                            placeholder="Search for a video..."
                        />
                    </View>
                    <AntDesign name="search1" size={24} color="white"  />
                </View>
                <View style={{flex: 4}}>
                    <Cover
                        borderRadius={10}

                    />
                </View>

                <View style={styless.container}>
                    {twoByTwoData.map((innerArray, index) => (
                        <View key={index} style={styless.row}>
                            {innerArray.map((artist) => (
                                <View key={artist.name} style={styless.col}>
                                     <TouchableOpacity 
            onPress={() => navigation.navigate('Playlist', { ...filteredPlaylist[index + 1] })}>
                                    <Image source={{ uri: artist.image }} style={styless.thumbnail} />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={styless.name}>{artist.name}</Text>
                                        <Text style={styless.followers}>{artist.followers}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>

    <View style={{marginRight: 20}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
    >
        <Entypo name="home" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>Discovory</Text>
    </TouchableOpacity>
    </View>
  <View></View>


    <View style={{width: 20}}/>

    <View style={{marginRight: 40}}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Playlist')}
    >
        <Entypo name="folder-video" size={30} color="white"/>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>library</Text>
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
        )
    }

const styless = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#1F1D2B",
        padding:2


       
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:-200 ,
        marginEnd :1,
        padding:2
        
        
      
        
    },
    col: {
        alignItems: 'center',
        padding:2
        
       
    },
    thumbnail: {
        width: 90,
        height: 80,
        
    },
    name: {
        fontSize: 8,
        
    },
    followers: {
        fontSize: 5,
        color: 'grey',
    },
});

    const styles = StyleSheet.create({
        searchContainer: {
            padding: 10,
            backgroundColor: '#fff',
        },
        searchInput: {
            height: 40,
            fontSize: 16,
            padding: 10,
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 5,
            color:'white'

        },
        container: {
            padding: 20,
            backgroundColor: 'white'
        },
        info: {
            justifyContent: 'center'
        },
        followers: {
            fontSize: 14,
            color: 'black'
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
            fontWeight: 'bold'
        },
    });

    export default ArtisteScreen