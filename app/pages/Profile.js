import React from 'react';
    import { Text,  View } from 'react-native';
const   Profile = ({navigation}) => {
    const goToProfile = () => {
        navigation.navigate("Profile");

    }

    return(

        <View>

            <Text> Profile</Text>
        </View>
    )
}

export default Profile;