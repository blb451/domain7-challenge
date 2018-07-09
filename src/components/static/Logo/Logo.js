// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Assets
import domain7Logo from 'assets/images/domain7.png';
import newsAPILogo from 'assets/images/news.png';

// Styles
import { Domain7, NewsAPI, Container, LogoWrapper, Plus } from './styles';

const Logo = ({ onClick, interactive }) => (
  <Container onClick={onClick}>
    <LogoWrapper interactive={interactive}>
      <Domain7 src={domain7Logo} alt="domain7 logo" />
      <Plus>+</Plus>
      <NewsAPI src={newsAPILogo} alt="news api logo" />
    </LogoWrapper>
  </Container>
);

Logo.defaultProps = {
  onClick: () => {},
  interactive: false,
};

Logo.propTypes = {
  onClick: Proptypes.func,
  interactive: Proptypes.bool,
};

export default Logo;
