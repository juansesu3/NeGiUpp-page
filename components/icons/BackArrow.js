import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
const Icon = styled.div`
  color: white;
  width: 22px;
  position: absolute;
  bottom: 10px;
  left: 5px;
  cursor: pointer;
  &:hover {
    color: #4d61fc;
  }
`;

const BackArrow = ({ className = "w-6 h-6" }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <Icon onClick={goBack}>
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
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </Icon>
  );
};

export default BackArrow;
