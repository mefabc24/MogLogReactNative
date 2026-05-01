import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

export type ScreenName = 'Dashboard' | 'Train' | 'Intel' | 'Feed' | 'Profile';

type IconName = ComponentProps<typeof MaterialIcons>['name'];

type NavItem = {
  label: ScreenName;
  icon: IconName;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Train', icon: 'fitness-center' },
  { label: 'Intel', icon: 'insights' },
  { label: 'Feed', icon: 'article' },
  { label: 'Profile', icon: 'person' },
];

type BottomNavProps = {
  activeScreen: ScreenName;
  onSelect: (screen: ScreenName) => void;
};

export function BottomNav({ activeScreen, onSelect }: BottomNavProps) {
  return (
    <View style={styles.nav}>
      {navItems.map((item) => {
        const isActive = item.label === activeScreen;

        return (
          <Pressable
            key={item.label}
            accessibilityRole="button"
            onPress={() => onSelect(item.label)}
            style={[styles.item, isActive && styles.activeItem]}
          >
            <MaterialIcons
              name={item.icon}
              size={22}
              color={isActive ? colors.primaryText : colors.muted}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    backgroundColor: colors.blackCard,
    borderTopColor: colors.primaryAccent,
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 84,
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  item: {
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    minHeight: 58,
    paddingVertical: 6,
  },
  activeItem: {
    backgroundColor: colors.primaryAccent,
  },
  label: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },
  activeLabel: {
    color: colors.primaryText,
  },
});
