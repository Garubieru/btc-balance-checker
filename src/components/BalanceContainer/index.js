import React from 'react';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const iconSize = 30;
export default function BalanceContainer({ isConfirmed, balance, ...rest }) {
  const string = `${balance || 'No'} ${
    isConfirmed ? 'Confirmed' : 'Unconfirmed'
  } balance(s)`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper isConfirmed={isConfirmed} {...rest}>
      {isConfirmed ? (
        <FaCheckCircle size={iconSize} />
      ) : (
        <FaTimesCircle size={iconSize} />
      )}
      {string}
    </Wrapper>
  );
}

BalanceContainer.defaultProps = {
  isConfirmed: false,
};

BalanceContainer.propTypes = {
  isConfirmed: PropTypes.bool,
  balance: PropTypes.number.isRequired,
};
