import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  const num_rear = num.toString().charAt(0);
  const num_front = num.toString().charAt(1);
  return (
    <div className="rotor-group">
      <div className="rotor-group-heading" data-before={unit}>
        <div className="rotor">
          <div className={`rotor-leaf${flip ? " flipped" : ""}`}>
            <figure className="rotor-leaf-rear">{num_rear}</figure>
            <figure className="rotor-leaf-front">{num_rear}</figure>
          </div>
          <div className="rotor-top">{num_rear}</div>
          <div className="rotor-bottom">{num_rear}</div>
        </div>
        <div className="rotor">
          <div className={`rotor-leaf${flip ? " flipped" : ""}`}>
            <figure className="rotor-leaf-rear">{num_front}</figure>
            <figure className="rotor-leaf-front">{num_front}</figure>
          </div>
          <div className="rotor-top">{num_front}</div>
          <div className="rotor-bottom">{num_front}</div>
        </div>
      </div>
    </div>
  );
};