import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

type PrototypeCardProps = {
  heading: string;
  text: string;
  value?: string;
  accentColor?: string;
  backgroundColor?: string;
};

export function PrototypeCard({
  heading,
  text,
  value,
  accentColor = colors.secondaryAccent,
  backgroundColor = colors.darkCard,
}: PrototypeCardProps) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.heading}>{heading}</Text>
      {value ? <Text style={styles.value}>{value}</Text> : null}
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.accentLine, { backgroundColor: accentColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 166,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: 18,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 38,
  },
  heading: {
    color: colors.primaryText,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.primaryText,
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 12,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 15,
    lineHeight: 22,
  },
  accentLine: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 20,
    height: 2,
  },
});
