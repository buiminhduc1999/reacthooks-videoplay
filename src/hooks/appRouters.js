import React, { useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../components/styles/GlobalStyle';
import Header from '../components/Header';
import appRouters from '../routers/index';

function Routing() {
    console.log(appRouters);
    const renderRouter = useCallback(() =>
        appRouters.map((router, index) => {
            return (
                <Route
                    key={index.toString()}
                    path={`${router.parentPath}${router.path}`}
                    component={router.component}
                    exact={router.exact === true}
                />
            );
        }), []);
    return (
        <BrowserRouter basename="/react_videoplayer/">
            <Header />
            <Switch>
                {renderRouter()}
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
}
export default Routing;