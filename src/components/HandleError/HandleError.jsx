import PropTypes from 'prop-types';

import { Wrap, Text } from './HandleError.styled';

const HandleError = ({ title }) => {
  return (
    <Wrap>
      <Text>{title}</Text>
    </Wrap>
  );
};

HandleError.propTypes = {
  title: PropTypes.string,
};

export default HandleError;
