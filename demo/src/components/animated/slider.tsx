import { css } from "emotion";
import React, { TouchEvent } from "react";
import { useSpring, animated } from "react-spring/web";
export interface AnimatedProps {
  children: React.ReactElement;
  distance: number;
};

export const Slider: React.FC<AnimatedProps> = ({ children, distance }) => {
  const props = useSpring({
    from: { transform: `translate3d(${-distance}px, 0, 0)` },
    to: { transform: 'translate3d(0, 0, 0)' },
  })
  return (
    <animated.div style={props}>
      <Dragble>
        {children}
      </Dragble>
    </animated.div>
  );
};


const Dragble: React.FC = ({ children }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const getEventHandler = () => {
    let originX = 0;
    let deltaX = 0;
    let dragging = false;

    const doTask = (x: number) => set({ x });
    const start = (x: number) => {
      originX = x;
      dragging = true;
    };
    const move = (x: number) => {
      deltaX = x - originX;
      doTask(deltaX);
    };
    const end = () => {
      dragging = false;
      doTask((deltaX = 0));
    };

    const onMouseDown = ({ clientX }: React.MouseEvent) => {
      if (!clientX) return;
      start(clientX);
    };
    const onMouseMove = ({ clientX }: React.MouseEvent) => {
      if (!dragging || !clientX) return

      move(clientX);
    };
    const onMouseUp = () => {
      end();
    };
    const onMouseLeave = () => {
      console.log('leave')
      end();
    };

    const onTouchStart = ({ touches }: React.TouchEvent) => {
      // start(clientX);
      console.log(touches)
    };
    const onTouchMove = ({ touches }: React.TouchEvent) => {
      // if (!dragging) return

      // move(clientX);
    };
    const onTouchEnd = () => {
      end();
    };

    return {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,

      onTouchStart,
      onTouchMove,
      onTouchEnd,
    }
  };

  const {
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,

    onTouchStart,
    onTouchEnd,
    onTouchMove
  } = getEventHandler();
  return (
    <animated.div style={{ transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)}} onMouseDown={onMouseDown}>
      {children}
    </animated.div>
  )
}