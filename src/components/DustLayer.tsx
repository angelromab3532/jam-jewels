import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  count: number;
  seed: number;
  tint?: string;
};

const PASSES = 4;

/**
 * Static, deterministic dust grain. Four stroked paths instead of thousands of
 * circle nodes: same speckle, a fraction of the view count, and it survives
 * release builds without a single animation driver.
 */
function DustLayerBase({ width, height, count, seed, tint }: Props) {
  const passes = useMemo(() => {
    let s = seed >>> 0 || 1;
    const rand = () => {
      s ^= s << 13;
      s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5;
      s >>>= 0;
      return s / 4294967296;
    };

    const per = Math.max(1, Math.floor(count / PASSES));
    const out: { d: string; w: number; o: number }[] = [];
    for (let p = 0; p < PASSES; p++) {
      let d = '';
      for (let i = 0; i < per; i++) {
        const x = (rand() * width).toFixed(1);
        const y = (rand() * height).toFixed(1);
        d += 'M' + x + ' ' + y + 'h0.01';
      }
      out.push({ d, w: 0.9 + p * 0.45, o: 0.22 - p * 0.04 });
    }
    return out;
  }, [width, height, count, seed]);

  const color = tint || '#F4E8D8';

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFillObject, styles.wrap]}>
      <Svg width={width} height={height}>
        {passes.map((p, i) => (
          <Path
            key={i}
            d={p.d}
            stroke={color}
            strokeWidth={p.w}
            strokeOpacity={p.o}
            strokeLinecap="round"
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { overflow: 'hidden' },
});

export const DustLayer = React.memo(DustLayerBase);
