import React from "react";
import { Spring } from "react-spring/renderprops";

export const Slider = (props) => {
  const defaultLeftInAnimation = {
    from: props.from || { left:  -220 },
    to: props.to || { left: 0 },
  }

  return (
    <Spring {...defaultLeftInAnimation}>
      {style => React.cloneElement(
        props.children,
        { style }
      )}
    </Spring>
  )
}
