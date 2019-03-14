import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/AppContainer";
import store from "./store/configureStore";

// So it can be webpacked.
require('../index.html');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main")
);