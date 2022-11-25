import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();
// ev ta bort strict mode om warning
// query client provider wrapping around App
// enables us to use react queries in the app
ReactDOM.render(
  <React.StrictMode> 
      <QueryClientProvider client={client}>
          <App />
      </QueryClientProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

