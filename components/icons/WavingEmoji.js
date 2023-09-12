import React from 'react'
import styled, { keyframes } from 'styled-components';


const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-30deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(30deg); }
  100% { transform: rotate(0deg); }
`;

const WavingEmojiContainer = styled.span`
  display: inline-block;
  font-size: 50px;
  animation: ${waveAnimation} 2s infinite;
`;

const WavingEmoji = () => {
  return (
    <WavingEmojiContainer>&#x1F44B;</WavingEmojiContainer>
  )
}

export default WavingEmoji