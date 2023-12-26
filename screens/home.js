import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/title';

const Home = () => {
    return (
        <View>
            <Title />
            <View style={style.bannerContainer}>
                <Image source={{
                    url:"https://storyset.com/illustration/biologist/amico"
                }}
                style={styles.banner}
                resizeMode='contain'
                />
            </View>
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Home;
