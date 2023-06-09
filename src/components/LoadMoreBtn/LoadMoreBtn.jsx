import PropTypes from 'prop-types';

import { Btn } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick} aria-label="Load More">
      Load More...
    </Btn>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
