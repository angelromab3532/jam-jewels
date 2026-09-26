import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Polygon, Stop } from 'react-native-svg';

type Props = { size: number };

/** Brand rhombus: the app's single hero object. */
export function GemufjaxmfgwjeweblsMark({ size }: Props) {
  void ufjaxmfgwjeweblsGemMarkObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGemMarkObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGemMarkObfV5ClampMod(7, 5);

  const h = size / 2;
  const body = `${h},${size * 0.06} ${size * 0.92},${h} ${h},${size * 0.94} ${size * 0.08},${h}`;
  const shine = `${h},${size * 0.06} ${size * 0.92},${h} ${h},${h}`;

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="gemMarkBody" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#8E55C8" />
          <Stop offset="0.55" stopColor="#753FB0" />
          <Stop offset="1" stopColor="#D93A67" />
        </LinearGradient>
      </Defs>
      <Circle cx={h} cy={h} r={h * 0.98} fill="#753FB0" opacity={0.1} />
      <Circle cx={h} cy={h} r={h * 0.8} fill="#753FB0" opacity={0.07} />
      <Circle cx={h} cy={h} r={h * 0.62} fill="#753FB0" opacity={0.05} />
      <Polygon points={body} fill="url(#gemMarkBody)" stroke="#EFC04C" strokeWidth={1.5} />
      <Polygon points={shine} fill="#F4E8D8" opacity={0.3} />
    </Svg>
  );
}

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
function ufjaxmfgwjeweblsGemMarkObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsGemMarkObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsGemMarkObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

