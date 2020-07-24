import EditImages from '../screens/image_screens/EditImages';
import AddImages from '../screens/image_screens/AddImages';
import ShowListImages from '../screens/image_screens/ShowListImages';
export default [
    {
        exact: true,
        path: '/image/list',
        private: false,
        component: ShowListImages,
    },
    {
        exact: true,
        path: '/image/add',
        private: false,
        component: AddImages,
    },
    {
        exact: true,
        path: '/image/edit/:id',
        private: false,
        component: EditImages,
    },
];
