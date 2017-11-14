export default class TodoAppService {
    get(key: string) {
        return localStorage.getItem(key);
    }

    set(key: string, data: any) {
        return localStorage.setItem(key, data);
    }
}
