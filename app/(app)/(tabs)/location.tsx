import React, {useState, useEffect} from 'react';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Platform, Text } from 'react-native';

import * as Location from 'expo-location';

export default function LocationPage() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location)
  }


  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={{
    latitude: location? location["coords"]["latitude"] : 37.78825,
    longitude: location? location["coords"]["longitude"] : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}

 >
   <UrlTile
    /**
     * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
     * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
     */
    urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /**
     * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
     * MKTileOverlay. iOS only.
     */
    maximumZ={19}
    /**
     * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
     * to be used. Its default value is false.
     */
    flipY={false}
  />
  {location==null ? null:
      <Marker
      coordinate={{latitude: location["coords"]["latitude"], longitude: location["coords"]["longitude"]}}
      title="your location"
      description="your location"
    />
}
  </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
















// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text, Dimensions } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// const CurrentLocationMap = () => {
//   const [region, setRegion] = useState({
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
//       },
//       (error) => {
//         console.error(error);
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} region={region}>
//         <Marker coordinate={region} title="Your Location" />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// export default CurrentLocationMap;
