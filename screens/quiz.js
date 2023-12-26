import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Quiz = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.top}>Imagine this is a really cool question</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Cool Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool Option 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({})

export default Quiz;
