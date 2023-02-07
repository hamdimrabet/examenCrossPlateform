import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic, Cover } from '@my-workspace/my-ui'
import { AntDesign, Feather,Entypo,Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';


import { Video, AVPlaybackStatus } from 'expo-av';

const HomeScreen = ({ navigation, route }) => {
    console.log(route)
    const video = React.useRef(null);

    const [dataPlayer, setDataPlayer] = useState(route.params)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(dataPlayer.duration)
    const [isPlaying, setIsPlaying] = useState(false)
    let interval;
    console.log(dataPlayer)

    const convertSecondToHHMMSS = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let timeString = '';
        if (hours !== 0) {
            timeString += `${hours.toString().padStart(2, '0')}:`;
        }
        timeString += `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return timeString;
    }
    const handlePlay = (isPlaying) => {
        setIsPlaying(isPlaying)
        if (isPlaying) {
            video.current.playAsync()
        } else {






            video.current.pauseAsync()




        }


    }


    useEffect(() => {

        if (currentDuration >= maxDuration) {
            setIsPlaying(false)
            setCurrentDuration(maxDuration)
        }
        if (currentDuration < 0) {
            setCurrentDuration(0)
        }

    }, [currentDuration])
    useEffect(() => {

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentDuration(oldValue => oldValue + 1)

            }, 1000)
        }

        return () => clearInterval(interval)

    }, [isPlaying])

    return (
        <View style={{ flex: 1, width: 350, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center',borderRadius: 20 }}>
            

            <Video
                ref={video}
                source={{
                    uri: dataPlayer.urlMp4,
                }}
                useNativeControls
                
                isLooping
            />

            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    size={70}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack() }}
                />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>Now Playing</Text>
            </View>
            <View style={{ flex: 4 }}>


                <Cover
                    borderRadius={200}
                    size ={250}
                    imageUrl={dataPlayer.poster}
                />


            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
                <Slider
                    value={currentDuration}
                    onValueChange={(value) => { setCurrentDuration(value) }}
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    step={1}
                    maximumValue={maxDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FDFDFD"
                    thumbTintColor="#F00DFD"
                />
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <RoundButtonMusic
                    backgroundColor="balck"
                    icon={<Feather name="chevrons-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 10) }}
                    size={50}
                />

                <RoundButtonMusic
                   
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={50}
                /> <RoundButtonMusic
                   
                    icon={isPlaying ? <FontAwesome name="pause" size={24} color="white" /> : <FontAwesome name="play" size={24} color="white" />}
                    onClickButton={() => { handlePlay(!isPlaying) }}
                    size={50}
                /> <RoundButtonMusic
                    
                    icon={<Feather name="chevron-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) }}

                    size={50}
                /> <RoundButtonMusic
                   
                    icon={<Feather name="chevrons-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 10) }}

                    size={50}
                />

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
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});