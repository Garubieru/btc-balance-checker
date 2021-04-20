import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './index';

it('checkButtonRender', () => {
  const { baseElement } = render(<Button type="button" />);

  const btn = baseElement;
  expect(btn).toBeTruthy();
});

describe('clickButton', () => {
  it('onClick', () => {
    const { baseElement } = render(<Button type="button" />);
    fireEvent.click(baseElement);
  });
});
