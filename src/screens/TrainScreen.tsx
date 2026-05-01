import { ScrollView, StyleSheet, Text } from 'react-native';

import { PrototypeButton } from '../components/PrototypeButton';
import { PrototypeCard } from '../components/PrototypeCard';
import { colors } from '../theme/colors';

export function TrainScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>PROTOTYPE LAYOUT</Text>
      <Text style={styles.title}>Train</Text>

      <PrototypeCard
        heading="Training Focus"
        value="4 Drills"
        text="Placeholder block for a simple practice overview."
      />
      <PrototypeCard
        heading="Session Plan"
        value="25 Min"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante."
        accentColor={colors.primaryAccent}
        backgroundColor={colors.blackCard}
      />
      <PrototypeButton title="Start" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
  },
  label: {
    color: colors.secondaryAccent,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.primaryText,
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 22,
  },
});
