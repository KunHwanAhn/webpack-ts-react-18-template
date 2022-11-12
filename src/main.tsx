import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import store from './store';
import router from './router';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <StoreProvider store={store}>
    <RouterProvider router={router} />
  </StoreProvider>,
);
