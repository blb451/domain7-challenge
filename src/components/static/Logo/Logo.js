// Modules
import React from 'react';

// Assets
import domain7Logo from 'assets/images/domain7.png';
import newsAPILogo from 'assets/images/news.png';

// Styles
import { Domain7, NewsAPI, Container, Plus } from './styles';

const Logo = () => (
  <Container>
    <Domain7 src={domain7Logo} />
    <Plus>+</Plus>
    <NewsAPI src={newsAPILogo} />
  </Container>
);

export default Logo;
