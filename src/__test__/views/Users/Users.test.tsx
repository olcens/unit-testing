import { Users } from 'views/Users';
import { renderWithProviders } from '__test__/renderWithProviders';

describe('Users view', () => {
  it('should display a list of users', async () => {
    const { getByText, findAllByText } = renderWithProviders(<Users />);
    expect(getByText(/Loading.../i).textContent).toBe('Loading...');

    const nameNode = await findAllByText(/Name/i);
    expect(nameNode).toBeTruthy();
  });
});
