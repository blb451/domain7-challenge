// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Components
import Button from 'components/ui/Button';
import PageChanger from 'pages/news/PageChanger';

// Styles
import { colors } from 'config/style.constant';
import { Container } from './styles';

const shouldRenderNext = (currentPage, totalResults, pageSize) =>
  currentPage * pageSize < totalResults;

const shouldRenderPrevious = currentPage => currentPage !== 1;

const renderPageChangers = (pages, setPage, pageSize, totalResults) =>
  pages.map(page => (
    <PageChanger
      key={page}
      pageNumber={page}
      setPage={setPage}
      pageSize={pageSize}
      totalResults={totalResults}
    />
  ));

const Pagination = ({
  currentPage, totalResults, pageSize, setPage,
}) => {
  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;
  const nextPages = [nextPage, currentPage + 2, currentPage + 3];
  const previousPages = [currentPage - 3, currentPage - 2, previousPage];

  return (
    <Container>
      {shouldRenderPrevious(currentPage) && (
        <Button onClick={() => setPage(previousPage)}>Previous</Button>
      )}
      {renderPageChangers(previousPages, setPage, pageSize, totalResults)}
      <Button onClick={() => {}} color={colors.background} disabled>
        {currentPage}
      </Button>
      {renderPageChangers(nextPages, setPage, pageSize, totalResults)}
      {shouldRenderNext(currentPage, totalResults, pageSize) && (
        <Button onClick={() => setPage(nextPage)}>Next</Button>
      )}
    </Container>
  );
};

Pagination.propTypes = {
  currentPage: Proptypes.number.isRequired,
  totalResults: Proptypes.number.isRequired,
  pageSize: Proptypes.number.isRequired,
  setPage: Proptypes.func.isRequired,
};

export default Pagination;
