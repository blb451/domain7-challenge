// Modules
import React, { Component } from 'react';
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

// Blatently stolen
const missingImage =
  'https://images.immediate.co.uk/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=620,413';

// Could be moved into a utilities module
const formatDate = date => moment(date).format('MMMM Do, YYYY h:mm a');

class Article extends Component {
  state = { backupImage: '' };

  // Handle broken images
  addDefaultSrc = () => {
    this.setState({
      backupImage: missingImage,
    });
  };

  render() {
    const {
      title, url, urlToImage, description, author, publishedAt,
    } = this.props;
    const { backupImage } = this.state;
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Container>
          {urlToImage && (
            <ImageWrapper>
              <Image src={backupImage || urlToImage} alt="not found" onError={this.addDefaultSrc} />
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
  }
}

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
