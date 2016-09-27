import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import PageContainer from './components/page-container';
// import store from './redux/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PageContainer />, document.getElementById('app'));
});

//     <Provider store={store}></Provider>
