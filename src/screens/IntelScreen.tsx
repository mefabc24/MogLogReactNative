import { ScrollView, StyleSheet, Text } from 'react-native';

import { PrototypeButton } from '../components/PrototypeButton';
import { PrototypeCard } from '../components/PrototypeCard';
import { colors } from '../theme/colors';

export function IntelScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>PROTOTYPE LAYOUT</Text>
      <Text style={styles.title}>Intel</Text>

      <PrototypeCard
        heading="System Status"
        value="98%"
        text="Static intelligence summary for the prototype screen."
      />
      <PrototypeCard
        heading="Insight Window"
        value="12"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero."
        accentColor={colors.primaryAccent}
        backgroundColor={colors.blackCard}
      />
      <PrototypeButton title="Scan" />
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
