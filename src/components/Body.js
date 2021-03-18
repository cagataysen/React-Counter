import React from "react";

export const Body = props => (
  <div>
    <p>{props.text}</p>
    <p>{props.text2}</p>
    <p>{props.myFunc(22, 9)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>hi</div>
  </div>
);
