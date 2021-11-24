import Home from '../views/pages/home';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home,
    '/detail/:id': Detail,
    '/favorite': Like,
};

export default routes;