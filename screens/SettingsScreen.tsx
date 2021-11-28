import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined,
    Details: undefined
}

type SettingsProps = NativeStackScreenProps<RootStackParamList>;

const SettingsScreen = ({navigation} : SettingsProps) => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings Screen</Text>
          <Button 
            title="Go to details screen"
            onPress={() => navigation.navigate("Details")}
          />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
