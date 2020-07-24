import Image from "./Image";
import Auth from "./Auth";
import Todos from "./Todos";
import Wbn from "./Wbn"

const routers = [
    {
        path: '',
        listRouter: Auth,
    },
    {
        path: '',
        listRouter: Image,
    },
    {
        path: '',
        listRouter: Todos,
    },
    {
        path: '',
        listRouter: Wbn,
    },

];
const appRouters = [];
const renderListRouter = () =>
    routers.forEach((objectRouter) => {
        const tmp = objectRouter.listRouter.map(
            (router) => {
                return { parentPath: objectRouter.path, ...router };
            },
        );
        appRouters.push(...tmp);
    });
renderListRouter();

export default appRouters;