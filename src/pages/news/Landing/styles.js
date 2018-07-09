import styled from 'styled-components';
import { fontSizes, colors } from 'config/style.constant';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  margin-top: 10%;
  width: 60%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  width: 70%;
  margin-top: 20px;
  word-wrap: break-word;
  font-size: ${fontSizes.slightlyLarger}em;
`;

export const Subtext = styled.p`
  text-align: center;
  width: 40%;
  margin-top: 20px;
  word-wrap: break-word;
  font-size: ${fontSizes.small}em;
  color: ${colors.darkerGrey};
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  text-align: center;
`;
