import React from 'react';
import ReactDOM from 'react-dom';

import IndexContainer from './Router/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexContainer />, document.getElementById('root'));
registerServiceWorker();