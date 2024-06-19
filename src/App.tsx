import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { App } from './components/App';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate>
      </Provider> */}
    </HashRouter >
  </React.StrictMode>
);

// basename="/Car-rental"