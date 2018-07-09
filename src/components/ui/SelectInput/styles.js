// Modules
import styled from 'styled-components';
import Select from 'react-styled-select';
import { breakpoints } from 'config/style.constant';

export const StyledSelect = styled(Select)`
  @media screen and (max-width: ${breakpoints.small}px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.small}px) {
    width: 100%;
  }
`;

export const Label = styled.p`
  margin: 0 5px;
  min-width: 10%;
`;
