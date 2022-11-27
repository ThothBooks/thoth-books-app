import React from 'react';

import { cleanup, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { shadowTheme } from '@tests/actions/styledTheme';

import UploadIcon from './index';

jest.useFakeTimers('legacy');

describe('Input component', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should render Input component correctly', () => {
    render(shadowTheme(<UploadIcon />));
  });
});
