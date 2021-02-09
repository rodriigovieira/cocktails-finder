import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomLinearGradientProps {
  style: ViewStyle;
  children: ReactNode;
}

const CustomLinearGradient = ({style, children}: CustomLinearGradientProps) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      style={style}
      colors={['#D01976', '#E63C3C']}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;
