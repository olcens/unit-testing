import { Users } from 'views/Users';
import { renderWithProviders } from '__test__/renderWithProviders';
import axios, { AxiosResponse } from 'axios';
import { USER } from './mock';
import { Mocked } from 'vitest';
import { UserApiResponse } from 'types/User/user';
import { act } from '@testing-library/react';

// 1. Did list render ✅
// 2. Did list render with a proper user count ✅
// 3. Did (UserCard) onClick trigger a (useUsers) function
// 4. Did list crash if API returns an error ✅
// 5. Did loading disappeared after data is fetched ✅

const selectUserMock = vi.fn();
vi.mock('views/Users/useUsers', async () => {
  const hookImport = await vi.importActual<typeof import('views/Users/useUsers')>('views/Users/useUsers');
  return {
    useUsers: () => ({
      ...hookImport.useUsers(),
      selectUser: selectUserMock
    })
  };
});

vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

describe('Users view', () => {
  it('should hide loader if the data is fetched', async () => {
    const { getByText, findAllByText } = renderWithProviders(<Users />);
    expect(getByText(/Loading.../i).textContent).toBe('Loading...');

    try {
      await findAllByText(/Loading.../i);
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('should display a list of users', async () => {
    const USERS_COUNT = 5;
    const mockedResponse: Pick<AxiosResponse<UserApiResponse>, 'data'> = {
      data: {
        results: Array(USERS_COUNT)
          .fill(USER)
          .map((u, idx) => ({ ...u, email: idx.toString() }))
      }
    };
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const { findAllByTestId } = renderWithProviders(<Users />);

    const nameNodes = await findAllByTestId('user-card');
    expect(nameNodes).toBeTruthy();
    expect(nameNodes.length).toBe(USERS_COUNT);
  });

  it('click on user card should trigger a function', async () => {
    const USERS_COUNT = 1;
    const mockedResponse: Pick<AxiosResponse<UserApiResponse>, 'data'> = {
      data: {
        results: Array(USERS_COUNT)
          .fill(USER)
          .map((u, idx) => ({ ...u, email: idx.toString() }))
      }
    };
    mockedAxios.get.mockResolvedValue(mockedResponse);
    const { findAllByTestId } = renderWithProviders(<Users />);
    const userCardNodes = await findAllByTestId('user-card');
    act(() => {
      userCardNodes[0].click();
    });
    expect(selectUserMock).toBeCalledTimes(1);
  });

  it('should not crash when API returns an error', async () => {
    mockedAxios.get.mockRejectedValue({});
    const { findAllByTestId } = renderWithProviders(<Users />);

    try {
      await findAllByTestId('user-card');
      // Should not happen
      expect(true).toEqual(false);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
