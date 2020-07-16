import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

import './styles/global-styles.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Main />
  </>,

  document.getElementById('root'),
);
