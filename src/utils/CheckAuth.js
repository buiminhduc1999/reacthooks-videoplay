import decode from 'jwt-decode';
import { getJwt } from './HandlingJwt';

const checkJwt = () => {
    try {
        if (getJwt === null)
            return false;

    } catch (e) {
        return false;
    }

    return true;
}
export default checkJwt;