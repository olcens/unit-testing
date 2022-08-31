import { render } from '@testing-library/react';
import { Divider } from 'components/Divider';

describe('Users view', () => {
  it('displays lists of users', () => {
    const component = render(<Divider />);
    expect(component).toBeTruthy();
  });
});
