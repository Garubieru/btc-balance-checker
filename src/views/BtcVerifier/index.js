import React, { useState, useEffect } from 'react';
import { RiBitCoinLine } from 'react-icons/ri';

import { validate } from 'bitcoin-address-validation';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BalanceContainer from '../../components/BalanceContainer';

import api from '../../services/axios';
import theme from '../../config/theme';

import loading from '../../images/loading.gif';
import { MainContainer, ContentWrapper, Title, BalanceWrapper } from './styles';

const balancesModel = {
  confirmed: '',
  unconfirmed: '',
};

export default function BtcVerifier() {
  const [address, setAddress] = useState('');
  const [balances, setBalances] = useState(balancesModel);

  const [isRequested, setIsRequested] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [auto, setAuto] = useState(false);

  // Auto update balance every 5 seconds if auto option is on.
  useEffect(() => {
    if (!auto) return null;
    const updateBalance = async () => {
      const { data } = await api.get(`/balance/${address}`);
      setBalances(data);
    };

    const interval = setInterval(() => updateBalance(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [auto, balances]);

  const handleClick = async () => {
    if (!validate(address)) {
      if (isRequested) setIsRequested(!isRequested);
      setAuto(false);
      return setIsError(true);
    }
    if (isError) setIsError(!isError);

    setIsRequested(true);
    setIsLoading(true);
    try {
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
          Bitcoin Balance Checker
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
          <>
            <BalanceWrapper>
              <BalanceContainer balance={confirmed} isConfirmed />
              <BalanceContainer balance={unconfirmed} />
            </BalanceWrapper>

            <Button
              type="button"
              style={{ width: '30%', fontSize: '1.6rem' }}
              bgColor={
                auto ? theme.colors.colorSuccess : theme.colors.colorError
              }
              onClick={() => setAuto(!auto)}
            >
              Auto update: {auto ? 'On' : 'Off'}
            </Button>
          </>
        )}

        {isRequested && isLoading && (
          <img src={loading} alt="Loading" className="loading" />
        )}
      </ContentWrapper>
    </MainContainer>
  );
}
