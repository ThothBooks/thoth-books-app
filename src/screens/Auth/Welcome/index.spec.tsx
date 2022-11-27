import React from 'react';

import { act, cleanup, render } from '@testing-library/react-native';

import { alertSpy } from '@tests/actions/alertSpy';

import { mockedNavigate } from '@tests/mocks/rnNavigation';
import { mockedUpdateStateUser } from '@tests/mocks/authContext';

import MockedNavigator from '@routes/MockedNavigator';

import Welcome from './index';

jest.mock('@services/api');

describe('Welcome Screen', () => {
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
    mockedNavigate.mockClear();
    mockedUpdateStateUser.mockClear();
  });

  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', async () => {
    render(<MockedNavigator component={Welcome} />);
    await act(async () => {});
  });
});
