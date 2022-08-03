import { Users } from 'views/Users';
import { store } from 'store/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Users/>
    </Provider>
  );
};
