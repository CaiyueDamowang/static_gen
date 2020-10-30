import React from "react";
import { Spring, SpringProps } from "react-spring/renderprops";

export interface AnimatedProps {
  animationConfig: SpringProps;
  children: React.ReactElement;
}

export const Slider: React.FC<AnimatedProps> = (props) => {
  const { animationConfig } = props

  return (
    <Spring {...animationConfig}>
      {style => React.cloneElement(
        props.children,
        { style }
      )}
    </Spring>
  )
}
