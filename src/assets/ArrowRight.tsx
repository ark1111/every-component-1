import React from "react";

type Props = {
  width?: number | string;
  color?: string;
  strokeWidth?: string;
};

const ArrowRight = ({ width, color, strokeWidth }: Props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52.29 20.77"
      width={width || "30px"}
    >
      <path
        d="m41.27.73c2.55,4.07,5.99,7.28,10.32,9.65-4.41,2.12-7.85,5.34-10.32,9.65"
        style={{
          fill: "none",
          stroke: color || "#231f20",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: strokeWidth || "1px",
        }}
      />
      <line
        x1="51.59"
        y1="10.39"
        x2=".7"
        y2="10.39"
        style={{
          fill: "none",
          stroke: color || "#231f20",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: strokeWidth || "1px",
        }}
      />
    </svg>
  );
};

export default ArrowRight;
