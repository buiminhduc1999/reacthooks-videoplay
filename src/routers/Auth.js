import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import NotFound from '../screens/404NotFoundScreen';
export default [
    {
        exact: true,
        path: '/auths/login',
        private: false,
        component: LoginScreen,
    },
    {
        exact: true,
        path: "/auths/register",
        private: false,
        component: RegisterScreen,
    },
    {
        exact: true,
        path: "/auths/forgotpassword",
        private: false,
        component: ForgotPassScreen,
    },
    {
        exact: true,
        path: "/auths/404notfound",
        private: false,
        component: NotFound,
    },
];
