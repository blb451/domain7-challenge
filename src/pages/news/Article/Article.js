// Modules
import React from 'react';
import moment from 'moment';
import Proptypes from 'prop-types';

// Styles
import {
  Link,
  Container,
  ImageWrapper,
  Image,
  ContentWrapper,
  Title,
  Data,
  Description,
} from './styles';

const formatDate = date => moment(date).format('MMMM Do, YYYY h:mm a');

const Article = ({
  title, url, urlToImage, description, author, publishedAt,
}) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    <Container>
      {urlToImage && (
        <ImageWrapper>
          <Image src={urlToImage} alt="not found" />
        </ImageWrapper>
      )}
      <ContentWrapper>
        <Title>{title}</Title>
        <Data>
          {author && `Published by ${author} • `}
          {formatDate(publishedAt)}
        </Data>
        <Description>{description}</Description>
      </ContentWrapper>
    </Container>
  </Link>
);

Article.defaultProps = {
  title: '',
  author: '',
  description: '',
  urlToImage: '',
};

Article.propTypes = {
  title: Proptypes.string,
  url: Proptypes.string.isRequired,
  urlToImage: Proptypes.string,
  description: Proptypes.string,
  author: Proptypes.string,
  publishedAt: Proptypes.string.isRequired,
};

export default Article;
