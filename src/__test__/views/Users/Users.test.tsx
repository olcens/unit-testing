import { Users } from 'views/Users';
import { renderWithProviders } from '__test__/renderWithProviders';

// 1. Did list render
// 2. Did list render with a proper user count
// 3. Did (UserCard) onClick trigger a (useUsers) function
// 4. Did list crash if API returns an error

describe('Users view', () => {
  it('should display a list of users', async () => {
    const { getByText, findAllByText } = renderWithProviders(<Users />);
    expect(getByText(/Loading.../i).textContent).toBe('Loading...');

    const nameNode = await findAllByText(/Name/i);
    expect(nameNode).toBeTruthy();
  });

  it('should display a list with quantity of requested resource', async () => {});
  it('click on user card should trigger a function', async () => {});
  it('should not crash when API returns an error', async () => {});
});
