import React, { useState } from "react";
import { useSpring, animated } from "react-spring/web";
import { Dragble } from "./dragble";

export interface AnimatedProps {
  children: React.ReactElement;
  distance: number;
  threshold?: number;
  dragEndCallback?: Function;
};

export const Slider: React.FC<AnimatedProps> = ({ 
  children,
  distance,
  dragEndCallback,
  threshold = 40,
}) => {
  const [visibility, setVisibility] = useState(true);

  const resolveCallback = () => {
    setVisibility(false);
    dragEndCallback && dragEndCallback();
  }

  const props = useSpring({
    from: {
      transform: `translate3d(${-distance}px, 0, 0)`
    },
    to: { transform: `translate3d(${visibility ? 0 : -distance}, 0, 0)` },
  })

  return (
    <animated.div style={props}>
      <Dragble resolveCallback={resolveCallback} threshold={threshold}>
        {children}
      </Dragble>
    </animated.div>
  );
};
