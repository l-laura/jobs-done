import React, { useState } from 'react';
import {
  Svg,
  Defs,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop
} from 'react-native-svg';

// TODO: Fix resizing on Android
// TODO: Fix Sunset size on iOS
export function EveningBackground() {
  return (
    <Svg width="100%" height="100%">
      <Defs>
        <LinearGradient id="BgEvening" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="rgb(0, 9, 21)" />
          <Stop offset="100%" stopColor="rgb(22, 35, 95)" />
        </LinearGradient>
        <RadialGradient id="Sunset">
          <Stop offset="0%" stopColor="rgb(107, 76, 122)" stopOpacity="0.5" />
          <Stop offset="100%" stopColor="rgb(107, 76, 122)" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#BgEvening)" />
      <Rect x="-50%" y="10%" width="200%" height="200%" fill="url(#Sunset)" />
    </Svg>
  );
}

export function MorningBackground() {
  return (
    <Svg width="100%" height="100%">
      <Defs>
        <LinearGradient id="BgMorning" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="rgb(107, 23, 82)" />
          <Stop offset="100%" stopColor="rgb(229, 131, 0)" />
        </LinearGradient>
        <RadialGradient id="Sunrise">
          <Stop offset="0%" stopColor="rgb(252, 228, 207)" stopOpacity="0.4" />
          <Stop offset="100%" stopColor="rgb(244, 212, 107)" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#BgMorning)" />
      <Rect x="-50%" y="10%" width="200%" height="200%" fill="url(#Sunrise)" />
    </Svg>
  );
}


export function DaytimeBackground() {
  return (
    <Svg width="100%" height="100%">
      <Defs>
        <LinearGradient id="BgDay" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="rgb(2, 220, 255)" />
          <Stop offset="100%" stopColor="rgb(252, 231, 5)" />
        </LinearGradient>
        <RadialGradient id="Day">
          <Stop offset="0%" stopColor="rgb(0, 127, 0)" stopOpacity="1" />
          <Stop offset="100%" stopColor="rgb(0, 80, 0)" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#BgDay)" />
      <Rect x="-50%" y="10%" width="200%" height="200%" fill="url(#Day)" />
    </Svg>
  );
}

export function Background(params) {
    if (5 < params.hour && params.hour < 12) {
      return MorningBackground();
    }
    else if (12 < params.hour && params.hour < 19) {
      return DaytimeBackground();
    }
    else {
      return EveningBackground();
    }
}