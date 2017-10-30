export default class TodoAppService {
    get(key) {
        return localStorage.getItem(key);
    };

    set(key, data) {
        return localStorage.setItem(key, data)
    };
}
