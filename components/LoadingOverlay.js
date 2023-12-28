
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const pulseAnimation = keyframes`
  0% { 
    opacity: 1;
  }
  50% { 
    opacity: 0.5; 
  }
  100% { 
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; // Toma todo el alto de la vista
  width: 100%; // Toma todo el ancho de la vista
  flex-direction: column;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const LoadingScreen = () => (
  <LoadingContainer>
    <Image
      src="/assets/logofinalpulido-white-3.png"
      alt="logo"
      width={250}
      height={250}
    />
    {/* Aquí puedes agregar la imagen PNG que desees */}
  </LoadingContainer>
);

export default LoadingScreen;
