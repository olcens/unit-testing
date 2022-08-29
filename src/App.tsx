import { Users } from 'views/Users';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { NavBar } from './components/Navbar';

export const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Users />
    </Provider>
  );
};
