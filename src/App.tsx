import * as React from 'react';

import Hello from '@/components/Hello';

function App() {
  return (
    <>
      <h1>Webpack + TypeScript + React</h1>
      <Hello
        complier="TypeScript"
        framework="React"
      />
    </>
  );
}

export default App;
