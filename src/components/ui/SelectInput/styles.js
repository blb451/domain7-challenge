// Modules
import styled from 'styled-components';
import Select from 'react-styled-select';

// Constants
import { breakpoints, fontSizes } from 'config/style.constant';

export const StyledSelect = styled(Select)`
  border-radius: 2px;
  font-size: ${fontSizes.small}em;
  width: 150px;

  @media screen and (max-width: ${breakpoints.small}px) {
    width: 75%;
    margin: 10px 0 0 0;
    font-size: ${fontSizes.normal}em;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.small}em;

  @media screen and (max-width: ${breakpoints.small}px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Label = styled.p`
  margin: 0 5px;
  min-width: 10%;
  font-size: ${fontSizes.normal}em;
`;
