import React from 'react';
import ReactDOM from 'react-dom';

import IndexContainer from 'containers/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexContainer />, document.getElementById('root'));
registerServiceWorker();
