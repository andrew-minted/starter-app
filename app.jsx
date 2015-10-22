// We need this line, because the JSX later in the file gets compiled to ES5,
// which makes calls to React
import React from 'react';

import App from './src/components/app/app';

React.render(<App />, document.getElementById('app'));
