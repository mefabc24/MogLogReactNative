import { ScrollView, StyleSheet, Text } from 'react-native';

import { PrototypeButton } from '../components/PrototypeButton';
import { PrototypeCard } from '../components/PrototypeCard';
import { colors } from '../theme/colors';

export function DashboardScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>PROTOTYPE LAYOUT</Text>
      <Text style={styles.title}>Dashboard</Text>

      <PrototypeCard
        heading="Optimal Capacity"
        value="60 M"
        text="Static capacity marker for the main dashboard view."
      />
      <PrototypeCard
        heading="Overview"
        value="60"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        accentColor={colors.primaryAccent}
        backgroundColor={colors.blackCard}
      />
      <PrototypeButton title="Next" />
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
