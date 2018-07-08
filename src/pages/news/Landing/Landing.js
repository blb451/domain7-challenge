// Modules
import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

// Components
import SearchField from 'components/ui/SearchField';

const Landing = ({
  queryString, handleInputChange, fetchNewsArticles, errorMessage,
}) => (
  <Fragment>
    <SearchField
      value={queryString}
      onChange={handleInputChange}
      onClick={fetchNewsArticles}
      buttonText="SEARCH"
    />
    {errorMessage}
    Helpful Text
  </Fragment>
);

Landing.propTypes = {
  queryString: Proptypes.string.isRequired,
  errorMessage: Proptypes.string.isRequired,
  handleInputChange: Proptypes.func.isRequired,
  fetchNewsArticles: Proptypes.func.isRequired,
};

export default Landing;
