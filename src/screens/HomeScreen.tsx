import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}
class HomeScreen extends React.Component<HomeScreenProps> {
  constructor(props: HomeScreenProps) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }

  private navigateTo() {
    this.props.navigation.navigate('Map');
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Google Map" onPress={this.navigateTo} />
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

export default HomeScreen;
