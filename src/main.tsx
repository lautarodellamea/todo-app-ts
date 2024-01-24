import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '/todomvc-app-css/index.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/* https://github.com/tastejs/todomvc-app-css */
/* npm install todomvc-app-css -E, el -E instala una version exacta para que luego al hacer un npm install se mantenga y no se actualice */
