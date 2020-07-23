import { listIdVideo } from '../utils/ListId';

const CheckId = (path) => {
    let count = 0;
    listIdVideo.forEach(element => {
        if (path === element) {
            count++;
        }
    });
    if (count < 1)
        return true;
    return false;
}
export default CheckId;