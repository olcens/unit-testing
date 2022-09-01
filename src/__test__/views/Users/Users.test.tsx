import { Users } from 'views/Users';
import { renderWithProviders } from '__test__/renderWithProviders';

describe('Users view', () => {
  it('displays lists of users', () => {
    const { getByText } = renderWithProviders(<Users />);
    expect(getByText(/Users list/i).textContent).toBe('Users list');
  });
});
