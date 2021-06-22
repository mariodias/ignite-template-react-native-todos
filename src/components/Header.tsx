import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch, SwitchProps } from 'react-native';

interface DarkTheme extends SwitchProps {

  darkMode: boolean;

}

export function Header({ onValueChange, darkMode }: DarkTheme) {

  return (
    <View style={[!darkMode ? styles.header : styles.darkHeader]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>do</Text>
      <Switch style={styles.switchProps}
          thumbColor="#CCCCCC" 
          trackColor={{ false: '#FFFFFF', true: '#000000' }}
          onValueChange={onValueChange}
          value={darkMode}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  darkHeader: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#282B5A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switchProps:{
    left: 110
  }
});
