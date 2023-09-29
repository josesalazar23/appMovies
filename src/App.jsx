import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store'; // Importa tu store de Redux
import AppMovies from './components/AppMovies';

function App() {
  return (
    <Provider store={store}>
      
        <AppMovies />
      
    </Provider>
  );
}

export default App;
