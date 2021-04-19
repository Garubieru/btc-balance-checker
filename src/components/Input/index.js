import React from 'react';
import PropTypes from 'prop-types';

import { InputBase, InputContainer } from './styles';
import theme from '../../config/theme';

export default function Input({
  onChange,
  type,
  value,
  placeholder,
  isError,
  errorMsg,
}) {
  return (
    <InputContainer>
      <InputBase
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {isError && (
        <small
          style={{
            color: theme.colors.colorError,
            fontSize: '1.5rem',
          }}
        >
          {errorMsg}
        </small>
      )}
    </InputContainer>
  );
}

Input.defaultProps = {
  isError: false,
  errorMsg: '',
  placeholder: '',
  type: 'text',
  value: '',
  onChange: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};
