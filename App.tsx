import { useState } from 'react';
import { SafeAreaView, StatusBar as NativeStatusBar, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { BottomNav, type ScreenName } from './src/components/BottomNav';
import { colors } from './src/theme/colors';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { FeedScreen } from './src/screens/FeedScreen';
import { IntelScreen } from './src/screens/IntelScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TrainScreen } from './src/screens/TrainScreen';

function renderScreen(activeScreen: ScreenName) {
  switch (activeScreen) {
    case 'Train':
      return <TrainScreen />;
    case 'Intel':
      return <IntelScreen />;
    case 'Feed':
      return <FeedScreen />;
    case 'Profile':
      return <ProfileScreen />;
    case 'Dashboard':
    default:
      return <DashboardScreen />;
  }
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenName>('Dashboard');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {renderScreen(activeScreen)}
        <BottomNav activeScreen={activeScreen} onSelect={setActiveScreen} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: NativeStatusBar.currentHeight ?? 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
