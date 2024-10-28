import React from 'react';
import { View, Text, Switch, SafeAreaView } from 'react-native';

const Settings = () => {
  const [gpsEnabled, setGpsEnabled] = React.useState(false);

  const toggleSwitch = () => setGpsEnabled((previousState) => !previousState);

  return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-start">
          <Text className="text-xl font-bold mb-4">GPS Based Attendance</Text>
          <View className="flex-row items-center justify-between w-4/5">
            <Text className="text-lg">Enable GPS</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'lightblue' }}
              thumbColor={gpsEnabled ? 'yellow' : 'white'}
              ios_backgroundColor="darkgray"
                onValueChange={toggleSwitch}
                value={gpsEnabled}
              />
            </View>
          </View>
      </SafeAreaView>
  );
};

export default Settings;
