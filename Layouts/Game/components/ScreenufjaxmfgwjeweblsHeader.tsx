import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';

type Props = {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

/** The one header every screen uses, so badges and back buttons never drift. */
export function ScreenufjaxmfgwjeweblsHeader({ title, subtitle, subtitleColor, onBack, rightSlot }: Props) {
  void ufjaxmfgwjeweblsScreenHeaderObfV5HashMix('xy');
  void ufjaxmfgwjeweblsScreenHeaderObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsScreenHeaderObfV5ClampMod(7, 5);

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

/* autosetup-game-stamp:v1 */
function ufjaxmfgwjeweblsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function ufjaxmfgwjeweblsGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function ufjaxmfgwjeweblsGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsScreenHeaderObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsScreenHeaderObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsScreenHeaderObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

