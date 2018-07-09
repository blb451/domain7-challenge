// Modules
import styled from 'styled-components';
import { colors, fontSizes, fontWeights } from 'config/style.constant';

export const Domain7 = styled.img`
  height: 200px;
  width: 200px;
`;

export const NewsAPI = styled.img`
  height: 200px;
  width: 200px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.blackest};
  font-size: ${fontSizes.massive}em;
  font-weight: ${fontWeights.bold};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const Plus = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
