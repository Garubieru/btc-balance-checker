import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BalanceContainer from './index';
import theme from '../../config/theme';

it('checkBalanceContainerConfirmedRender', () => {
  const balance = 20;
  const { queryByTitle } = render(
    <BalanceContainer balance={balance} isConfirmed />
  );

  const container = queryByTitle('balanceContainer');
  expect(container).toHaveTextContent(`${balance} Confirmed balance(s)`);
  expect(container).toHaveStyle(`background: ${theme.colors.colorSuccess}`);
});

it('checkBalanceContainerUnconfirmedRender', () => {
  const balance = 0;
  const { queryByTitle } = render(<BalanceContainer balance={balance} />);

  const container = queryByTitle('balanceContainer');
  expect(container).toHaveTextContent(`No Unconfirmed balance(s)`);
  expect(container).toHaveStyle(`background: ${theme.colors.colorError}`);
});
