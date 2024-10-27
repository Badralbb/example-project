import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the rose blooming effect
const bloom = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
`;

const BloomingRose = styled(animated.div)`
  width: 200px;
  height: 200px;
  background-color: #ff007f; /* Pinkish color for rose */
  border-radius: 50%;
  position: relative;
  animation: ${bloom} 2s ease-in-out forwards;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: inherit;
    border-radius: 50%;
  }

  &::before {
    width: 160px;
    height: 160px;
    top: -30px;
    left: 20px;
  }

  &::after {
    width: 160px;
    height: 160px;
    top: 20px;
    right: 20px;
  }
`;

const RoseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0e4f7;
`;

export const RoseBloom: React.FC = () => {
  const springProps = useSpring({
    from: { scale: 0.5, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: config.gentle,
    delay: 200,
  });

  return (
    <RoseContainer>
      <BloomingRose style={springProps} />
    </RoseContainer>
  );
};
