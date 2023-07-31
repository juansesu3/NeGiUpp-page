import React from "react";
import { styled } from "styled-components";
const Icon = styled.div`
color: white;
z-index: 10;
`

const DowloadIcon = ({ className = "w-6 h-6" }) => {
  return (
    <Icon style={{color:"white"}}>
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
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </Icon>
  );
};

export default DowloadIcon;
