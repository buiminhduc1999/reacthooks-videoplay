import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTodos from '../screens/listtodos_screens/AddTodos';
import EditTodos from '../screens/listtodos_screens/EditTodos';
import ViewTodos from '../screens/listtodos_screens/ViewTodos';
import ShowListTodos from '../screens/listtodos_screens/ShowListTodos';
import ShowListImages from '../screens/image_screens/ShowListImages';
import EditImages from '../screens/image_screens/EditImages';
import AddImages from '../screens/image_screens/AddImages';
import WbnPlayer from '../screens/video_screens/WbnPlayer';
import GlobalStyle from '../components/styles/GlobalStyle';
import Header from '../components/Header';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';

const Routing = () => (
    <>
        <BrowserRouter basename="/react_videoplayer/">
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={WbnPlayer} />
                <Route
                    exact
                    path="/:activeVideo"
                    component={WbnPlayer} />
                <Route
                    exact
                    path="/todos/list"
                    component={ShowListTodos}
                />
                <Route
                    exact
                    path="/todos/list/add"
                    component={AddTodos}
                />
                <Route
                    exact
                    path="/todos/list/edit/:id"
                    component={EditTodos}
                />
                <Route
                    exact
                    path="/todos/view/:id"
                    component={ViewTodos}
                />
                <Route
                    exact
                    path="/image/view"
                    component={ShowListImages}
                />
                <Route
                    exact
                    path="/image/edit/:id"
                    component={EditImages}
                />
                <Route
                    exact
                    path="/image/add"
                    component={AddImages}
                />
                <Route
                    exact
                    path="/service/login"
                    component={LoginScreen}
                />
                <Route
                    exact
                    path="/service/register"
                    component={RegisterScreen}
                />
                <Route
                    exact
                    path="/service/forgotpassword"
                    component={ForgotPassScreen}
                />
                <Route
                    exact
                    path="/service/logout"
                    component={WbnPlayer}
                />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    </>

)
export default Routing;