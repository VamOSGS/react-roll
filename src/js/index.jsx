import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import '../style/main.less';

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept();
    const NewApp = require('./components/App').default;
    render(NewApp);
}

render(App);
