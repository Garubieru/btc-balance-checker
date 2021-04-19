import styled from 'styled-components';
import theme from '../../config/theme';

export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: auto;
  width: 90%;
  max-width: 700px;

  button {
    margin-top: 1.5rem;
    width: 100%;
  }

  .feedback {
    margin-top: 1.2rem;
  }

  .error {
    color: ${theme.colors.colorError};
    font-size: 1.5rem;
  }

  .loading {
    width: 5rem;
    height: 5rem;
    margin-top: 1.2rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  align-self: center;

  @media screen and (max-width: 1500px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    font-size: 2rem;
  }
`;

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 1.2rem;
`;
