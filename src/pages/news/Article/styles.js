import styled from 'styled-components';
import { colors, fontSizes, breakpoints } from 'config/style.constant';

export const Link = styled.a`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  min-height: 168px;
  width: 100%;
  margin: 25px 0 0 0;
  padding: 20px;
  background: ${colors.white};
  border: 0.5px solid ${colors.lightGrey};

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media screen and (max-width: ${breakpoints.small}px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-height: 100%;

  @media screen and (max-width: ${breakpoints.small}px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-height: 200px;
  max-width: 90%;
  width: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Title = styled.p`
  font-size: ${fontSizes.normal}em;
`;

export const Data = styled.p`
  font-size: ${fontSizes.xSmall}em;
  color: hsl(0, 0%, 53.3%);
  word-wrap: break-word;
`;

export const Description = styled.p`
  font-size: ${fontSizes.small}em;
  color: hsl(0, 0%, 53.3%);
  word-wrap: break-word;
`;
