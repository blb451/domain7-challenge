// Modules
import styled from 'styled-components';
import { colors, fontSizes, fontWeights, breakpoints } from 'config/style.constant';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.blackest};
  font-size: ${fontSizes.massive}em;
  font-weight: ${fontWeights.bold};

  @media screen and (max-width: ${breakpoints.small}px) {
    margin-bottom: 30px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.interactive && 'pointer'};

  @media screen and (max-width: ${breakpoints.small}px) {
    flex-direction: column;
  }
`;

export const Domain7 = styled.img`
  height: 200px;
  width: 200px;
`;

export const NewsAPI = styled.img`
  height: 200px;
  width: 200px;
`;

export const Plus = styled.div`
  @media screen and (max-width: ${breakpoints.small}px) {
    display: none;
  }
`;
