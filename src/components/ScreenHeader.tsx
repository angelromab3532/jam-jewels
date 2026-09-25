import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

import { C, THEME } from '../constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

/** The one header every screen uses, so badges and back buttons never drift. */
export function ScreenHeader({ title, subtitle, subtitleColor, onBack, rightSlot }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            hitSlop={HIT}
            accessibilityRole="button"
            accessibilityLabel="Back"
            style={styles.back}>
            <ChevronLeft size={22} color={C.text.primary} strokeWidth={1.8} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[styles.subtitle, { color: subtitleColor || C.accent.gold }]}
            numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={[styles.side, styles.sideRight]}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: C.ui.scrim,
    borderBottomWidth: 1,
    borderBottomColor: C.ui.borderSoft,
  },
  side: {
    width: 76,
    height: 44,
    justifyContent: 'center',
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  back: {
    width: 44,
    height: 44,
    borderRadius: THEME.radius.md,
    backgroundColor: C.ui.glass,
    borderWidth: 1,
    borderColor: C.ui.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    color: C.text.primary,
  },
  subtitle: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    fontVariant: THEME.numeric.fontVariant,
  },
});
