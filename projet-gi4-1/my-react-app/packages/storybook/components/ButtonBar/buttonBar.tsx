import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'

interface Props {
navigation: any;
}

const NavigationTab: React.FC = ({ }) => {
return (
<View style={styles.container}>
<View style={styles.navItemContainer}>
<TouchableOpacity

>
<Entypo name="home" size={30} color="white"/>
<Text style={styles.navText}>Discovory</Text>
</TouchableOpacity>
</View>
<View style={styles.spacer} />
<View style={styles.navItemContainer}>
<TouchableOpacity

>
<Entypo name="folder-video" size={30} color="white"/>
<Text style={styles.navText}>Library</Text>
</TouchableOpacity>
</View>
<View style={styles.spacer} />
<View style={styles.navItemContainer}>
<TouchableOpacity

>
<Ionicons name="md-person-sharp" size={30} color="white"/>
<Text style={styles.navText}>Profile</Text>
</TouchableOpacity>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'flex-end',
},
navItemContainer: {
marginRight: 40,
},
navText: {
color: 'white',
fontSize: 14,
fontWeight: 'bold',
},
spacer: {
width: 20,
},
});

export default NavigationTab;