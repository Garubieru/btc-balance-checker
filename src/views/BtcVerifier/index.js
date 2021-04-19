import React, { useState } from 'react';
import { RiBitCoinLine } from 'react-icons/ri';

import { validate } from 'bitcoin-address-validation';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BalanceContainer from '../../components/BalanceContainer';

import api from '../../services/axios';
import theme from '../../config/theme';

import { MainContainer, ContentWrapper, Title, BalanceWrapper } from './styles';

const balancesModel = {
  confirmed: '',
  unconfirmed: '',
};

export default function BtcVerifier() {
  const [address, setAddress] = useState('');

  const [isRequested, setIsRequested] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [balances, setBalances] = useState(balancesModel);

  const handleClick = async () => {
    if (!address || !validate(address)) {
      if (isRequested) setIsRequested(false);
      return setIsError(true);
    }
    if (isError) setIsError(!isError);

    setIsRequested(true);
    try {
      setIsLoading(true);
      const { data } = await api.get(`/balance/${address}`);
      setBalances(data);
    } catch (e) {
      setIsRequested(false);
    }
    return setIsLoading(false);
  };

  const { confirmed, unconfirmed } = balances;
  return (
    <MainContainer>
      <ContentWrapper>
        <Title>
          <RiBitCoinLine size={80} color={theme.colors.colorPrimary} />
          Bitcoin Balances Checker
        </Title>

        <Input
          type="text"
          placeholder="bitcoin address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          isError={isError}
          errorMsg="Type a valid bitcoin address."
        />

        <Button type="button" onClick={handleClick}>
          Check
        </Button>

        {isRequested && !isLoading && (
          <BalanceWrapper>
            <BalanceContainer balance={confirmed} isConfirmed />
            <BalanceContainer balance={unconfirmed} />
          </BalanceWrapper>
        )}

        {isRequested && isLoading && (
          <img
            src="https://focorepresentacao.com.br/lib/images/loading-orange.gif"
            alt="Loading"
            className="loading"
          />
        )}
      </ContentWrapper>
    </MainContainer>
  );
}
