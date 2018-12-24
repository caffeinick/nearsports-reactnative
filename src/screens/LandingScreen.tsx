import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface LandingScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

class LandingScreen extends Component<LandingScreenProps, object> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>This is LandingScreen</Text>
        <Button
          title="Let's go App"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingScreen;
