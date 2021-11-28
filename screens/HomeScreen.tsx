import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Details: undefined,
    Settings: undefined
}

type HomeProps = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation} : HomeProps) => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button 
            title="Go to details screen"
            onPress={() => navigation.navigate("Details")}
          />
          <Button 
            title="Go to settings screen"
            onPress={() => navigation.navigate("Settings")}
          />

        </View>
      )
}

export default HomeScreen

const styles = StyleSheet.create({})
