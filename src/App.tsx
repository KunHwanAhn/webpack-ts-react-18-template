import * as React from 'react';
import { Outlet } from 'react-router-dom';

import '@/styles/index.scss';

function App() {
  return (
    <div>
      <h1>TODO with Webpack + TypeScript + React</h1>
      <Outlet />
    </div>
  );
}

export default App;
