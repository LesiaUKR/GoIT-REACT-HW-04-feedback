import PropTypes from 'prop-types';
import React from 'react';

import { Button, ButtonsBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBox>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
