// Modules
import styled from 'styled-components';

// Constants
import { colors } from 'config/style.constant';

const { offWhite, background } = colors;

export default styled.div`
  padding: 60px;
  background: linear-gradient(to right, ${offWhite}, ${background});
`;
