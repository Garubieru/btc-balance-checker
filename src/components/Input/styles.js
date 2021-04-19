import styled from 'styled-components';
import theme from '../../config/theme';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const InputBase = styled.input`
  background: none;

  border: 2px solid ${theme.colors.colorWhite};

  height: 5rem;
  padding: 0 2.5rem;
  font-size: 1.8rem;

  border-radius: ${theme.style.borderRadius};
  text-align: center;

  &:hover {
    background: ${theme.colors.colorLightWhite};
  }

  &:focus {
    border-radius: ${theme.style.borderRadiusLight};
    border-color: ${theme.colors.colorPrimary};
  }

  &::placeholder {
    color: ${theme.colors.colorGray};
    text-transform: capitalize;
  }
  transition: all 0.3s;
  width: 100%;
`;
