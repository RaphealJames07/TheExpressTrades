import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store  from './store.tsx'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
        <ToastContainer />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
  </Provider>,
)