import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export interface MapScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const points = [
  {
    latitude: 37.497896,
    longitude: 127.027631,
  },
  {
    latitude: 37.500786,
    longitude: 127.036918,
  },
];

class MapScreen extends React.Component<MapScreenProps> {
  private static navigationOptions = {
    title: 'Google Maps',
  };

  private getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX: number;
    let maxX: number;
    let minY: number;
    let maxY: number;

    // init first point
    (point => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map(point => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX) * 1.6;
    const deltaY = (maxY - minY) * 1.6;

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY,
    };
  }

  public render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        initialRegion={this.getRegionForCoordinates(points)}
      />
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

export default MapScreen;
