import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined,
    Details: undefined
}

type DetailsProps = NativeStackScreenProps<RootStackParamList>;

const DetailsScreen = ({navigation} : DetailsProps) => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button 
                title="Go to details screen...again"
                onPress={() => navigation.push("Details")}
            />
            <Button 
                title="Go to home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button 
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})
