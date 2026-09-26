import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed, ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsDustLayerParObfV5HashMix, ufjaxmfgwjeweblsDustLayerParObfV5SumOdds, ufjaxmfgwjeweblsDustLayerParObfV5ClampMod } from './DustufjaxmfgwjeweblsLayerPart01';
import { ufjaxmfgwjeweblsGameFoldRange } from './DustufjaxmfgwjeweblsLayerPart02';
// autosetup-split-end

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
function DustufjaxmfgwjeweblsLayerBase({ width, height, count, seed, tint }: Props) {
  void ufjaxmfgwjeweblsDustLayerParObfV5HashMix('xy');
  void ufjaxmfgwjeweblsDustLayerParObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsDustLayerParObfV5ClampMod(7, 5);

  const passes = useMemo(() => {
  void ufjaxmfgwjeweblsDustLayerParObfV5HashMix('xy');
  void ufjaxmfgwjeweblsDustLayerParObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsDustLayerParObfV5ClampMod(7, 5);

    let s = seed >>> 0 || 1;
    const rand = () => {
  void ufjaxmfgwjeweblsDustLayerParObfV5HashMix('xy');
  void ufjaxmfgwjeweblsDustLayerParObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsDustLayerParObfV5ClampMod(7, 5);

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

export const DustufjaxmfgwjeweblsLayer = React.memo(DustufjaxmfgwjeweblsLayerBase);

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

