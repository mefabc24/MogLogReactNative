import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

type PrototypeButtonProps = {
  title: string;
};

export function PrototypeButton({ title }: PrototypeButtonProps) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primaryAccent,
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 2,
    minHeight: 58,
    width: '100%',
  },
  text: {
    color: colors.primaryText,
    fontSize: 15,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});
