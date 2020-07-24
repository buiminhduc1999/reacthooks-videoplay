import WbnPlayer from '../screens/video_screens/WbnPlayer';

export default [
    {
        exact: true,
        path: '/:activeVideo',
        private: false,
        component: WbnPlayer,
    },
];
