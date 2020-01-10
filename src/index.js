import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Components/Details';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path="/" component={App} />
            <Route path="/details" component={Details} />
            {/* <App /> */}
        </Provider>
    </Router>, document.getElementById('app')
);

module.hot.accept();