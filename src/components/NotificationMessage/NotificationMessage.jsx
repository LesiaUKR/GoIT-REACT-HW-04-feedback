import PropTypes from 'prop-types';
import React from 'react';
import { Message } from './NotificationMessage.styled';

export const NotificationMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
