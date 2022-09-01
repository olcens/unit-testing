import { FC, ReactNode, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { render } from '@testing-library/react';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => <Provider store={store}>{children}</Provider>;

export const renderWithProviders = (ui: ReactElement) => render(ui, { wrapper: Providers });
