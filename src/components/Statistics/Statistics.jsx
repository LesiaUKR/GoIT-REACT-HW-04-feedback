import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsList, StatisticsItems } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItems>Good: {good}</StatisticsItems>
      <StatisticsItems>Neutral: {neutral}</StatisticsItems>
      <StatisticsItems>Bad: {bad}</StatisticsItems>
      <StatisticsItems>Total: {total}</StatisticsItems>
      <StatisticsItems>
        Positive feedback: {positivePersentage}%
      </StatisticsItems>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
