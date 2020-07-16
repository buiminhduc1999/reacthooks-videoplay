import React from 'react';
import WbnPlayer from './WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from "../styles/GlobalStyle";
import Todos from './Todos';
import AddTodos from './todos/AddTodos';
import EditTodos from './todos/EditTodos';
import ViewTodos from './todos/ViewTodos';
import Header from '../containters/Header';
import HomeScreen from './images/HomeScreen';
import EditScreen from './images/EditScreen';
import AddScreen from './images/AddScreen';
const App = () => (
    <>
        <BrowserRouter basename="/react_videoplayer/">
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={WbnPlayer} />
                    <Route exact path="/:activeVideo" component={WbnPlayer} />
                </Switch>
                <Route exact path="/todos/list" component={Todos} />
                <Route exact path="/todos/list/add" component={AddTodos} />
                <Route exact path="/todos/list/edit/:id" component={EditTodos} />
                <Route exact path="/todos/view/:id" component={ViewTodos} />
                <Route exact path="/image/view" component={HomeScreen} />
                <Route exact path="/image/edit/:id" component={EditScreen} />
                <Route exact path="/image/add" component={AddScreen} />
                <GlobalStyle />
            </>
        </BrowserRouter>
    </>

)
export default App;