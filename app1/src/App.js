import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Container App (Vault)</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '200px',
            height: '100vh',
            padding: '10px',
            'background-color': 'red',
            textAlign: 'center',
          }}
        >
          <h1>Vault Left Nav</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%' }}>
            <div
              style={{
                height: '200px',
                padding: '10px',
                textAlign: 'center',

                'background-color': 'green',
                margin: '10px',
              }}
            >
              <h1>Vault Rectangle</h1>
            </div>
          </div>
          <Suspense fallback={'loading...'}>
            <div style={{ width: '100%' }}>
              <RemoteApp />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
