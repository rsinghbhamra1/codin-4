import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

interface StyledImgProps {
  disabled?: boolean;
  borderRadius?: string;
}

const StyledImg = styled.img.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'borderRadius'].includes(prop),
})<StyledImgProps>`
  width: 100%;
  height: auto;
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Img: React.FC<ImgProps> = ({
  src,
  altText = 'Image',
  disabled = false,
  borderRadius,
}) => {
  return (
    <StyledImg
      src={src}
      alt={altText}
      disabled={disabled}
      borderRadius={borderRadius}
    />
  );
};
