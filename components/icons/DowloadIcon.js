import React from "react";
import { styled } from "styled-components";
const Icon = styled.div`
  color: white;
  z-index: 1;
  width: 16px;
`;

const DowloadIcon = ({ className = "w-1 h-1" }) => {
  return (
    <Icon style={{ color: "white" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </Icon>
  );
};

export default DowloadIcon;
