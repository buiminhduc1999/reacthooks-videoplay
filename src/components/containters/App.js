import React from 'react';
import WbnPlayer from './WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from "../styles/GlobalStyle";
import Todos from './Todos';
import AddTodos from './todos/AddTodos';
import EditTodos from './todos/EditTodos';
import ViewTodos from './todos/ViewTodos';
const App = () => (
    <>
        <BrowserRouter basename="/react_videoplayer/">
            <>
                <Switch>
                    <Route exact path="/" component={WbnPlayer} />
                    <Route exact path="/:activeVideo" component={WbnPlayer} />
                </Switch>
                <Route exact path="/todos/list" component={Todos} />
                <Route exact path="/todos/list/add" component={AddTodos} />
                <Route exact path="/todos/list/edit/:id" component={EditTodos} />
                <Route exact path="/todos/view/:id" component={ViewTodos} />
                <GlobalStyle />
            </>
        </BrowserRouter>
    </>

)
export default App;