import React, { useState } from "react";
import { useSpring, animated } from "react-spring/web";

export const Dragble: React.FC<{
  resolveCallback: Function;
  threshold: number;
}> = ({ children, resolveCallback, threshold }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const getEventHandler = () => {
    let originX = 0;
    let deltaX = 0;
    let dragging = false;

    const resolve = () => {
      if (
        deltaX > threshold ||
        deltaX < -threshold
      ) {
        resolveCallback()
      }
    }

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
      resolve();
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
      if (touches.length !== 1) return

      const { clientX }= touches[0];
      start(clientX);
    };
    const onTouchMove = ({ touches }: React.TouchEvent) => {
      if (!dragging) return;
      if (touches.length !== 1) return;

      const { clientX }= touches[0];
      move(clientX);
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
  return (
    <animated.div style={{ transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)}} {...getEventHandler()}>
      {children}
    </animated.div>
  )
}