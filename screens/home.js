import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/title';

const Home = () => {
    return (
        <View>
            <Title />
            <View>
                <Image source={{
                    url:"https://storyset.com/illustration/biologist/amico"
                }}
                style={styles.banner}
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
    }
})

export default Home;
