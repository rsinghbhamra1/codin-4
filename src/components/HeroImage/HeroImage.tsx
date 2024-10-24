import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

interface StyledHeroProps {
  backgroundImage: string;
  disabled?: boolean;
}

const StyledHero = styled.div.withConfig({
  shouldForwardProp: (prop) => !["backgroundImage", "disabled"].includes(prop),
})<StyledHeroProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  border-radius: 10px;
  overflow: hidden;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 50, 0.5);
`;

interface HeroContentProps {
  textColor?: string;
}

const HeroContent = styled.div<HeroContentProps>`
  position: relative;
  color: ${(props) => props.textColor || "#ffffff"};
  text-align: center;
  padding: 100px 20px;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  heroText = "Hero Content",
  disabled = false,
  textColor,
  ...props
}) => {
  return (
    <StyledHero
      backgroundImage={backgroundImage}
      disabled={disabled}
      {...props}
    >
      <Overlay />
      <HeroContent textColor={textColor}>{heroText}</HeroContent>
    </StyledHero>
  );
};
