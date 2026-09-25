import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { C, THEME } from '../constants/theme';

type Props = {
  dot: string;
  value: string;
  label: string;
};

/**
 * One pill, one shape. No raster icons: every AI sprite carries its own object
 * aspect ratio, so a row of them never reads as the same size. Colour carries
 * the meaning instead, and the number stays the loudest thing in the card.
 */
export function StatCard({ dot, value, label }: Props) {
  return (
    <View style={[styles.card, { borderColor: dot + '55' }]}>
      <View style={[styles.dot, { backgroundColor: dot }]} />
      <Text style={[styles.value, { color: dot }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    backgroundColor: C.ui.glassLight,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
    fontVariant: THEME.numeric.fontVariant,
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    color: C.text.secondary,
  },
});
