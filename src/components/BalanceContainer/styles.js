import styled from 'styled-components';
import theme from '../../config/theme';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  padding: 1.5rem 1rem;

  text-align: center;
  font-weight: bold;
  border-radius: ${theme.style.borderRadiusLight};
  background: ${(props) =>
    props.isConfirmed ? theme.colors.colorSuccess : theme.colors.colorError};

  transition: all 0.3s;

  &:hover {
    filter: brightness(70%);
    transform: scale(1.03);
  }

  @media screen and (max-width: 900px) {
    padding: 1.2rem;
    flex-direction: column;
  }
  width: 48%;
`;
