import React from 'react';
import ReactDOM from 'react-dom';
import AudienceApp from './components/AudiencesApp';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css'
import './styles/app.scss';

ReactDOM.render(<AudienceApp />, document.getElementById('root'));
serviceWorker.unregister();
