import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main/Main'

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>{/* Crio o Provider e adiciono os dados da store nele. Funciona da mesma maneira quando quero criar um contexto.*/}
      <Main />
    </Provider>
  </React.StrictMode>
)
