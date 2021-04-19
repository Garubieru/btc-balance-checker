import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../config/theme';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;

  border: none;
  background: ${theme.colors.colorPrimaryDark};
  border-radius: ${theme.style.borderRadiusLight};
  padding: 1.2rem;

  &:hover {
    background: ${theme.colors.colorPrimary};
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }

  transition: all 0.3s;
`;

export default Button;

Button.defaultProps = {
  handleClick: () => {},
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  handleClick: PropTypes.func,
};
