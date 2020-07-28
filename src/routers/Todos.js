import AddTodos from '../screens/listtodos_screens/AddTodos';
import EditTodos from '../screens/listtodos_screens/EditTodos';
import ViewTodos from '../screens/listtodos_screens/ViewTodos';
import ShowListTodos from '../screens/listtodos_screens/ShowListTodos';
export default [
    {
        exact: true,
        path: '/todos/add',
        private: false,
        component: AddTodos,
    },
    {
        exact: true,
        path: '/todos/list',
        private: false,
        component: ShowListTodos,
    },
    {
        exact: true,
        path: '/todos/edit/:id',
        private: false,
        component: EditTodos,
    },
    {
        exact: true,
        path: '/todos/view',
        private: false,
        component: ViewTodos,
    },
];
