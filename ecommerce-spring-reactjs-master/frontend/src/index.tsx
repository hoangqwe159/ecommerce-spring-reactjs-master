import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client"

import App from './pages/App/App';
import {API_BASE_URL} from "./utils/constants/url";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: API_BASE_URL,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>, document.getElementById('root')
);
