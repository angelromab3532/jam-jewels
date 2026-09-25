import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Polygon, Stop } from 'react-native-svg';

type Props = { size: number };

/** Brand rhombus: the app's single hero object. */
export function GemMark({ size }: Props) {
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
