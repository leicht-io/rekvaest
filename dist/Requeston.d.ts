export default class Requeston {
    static get: (url: string) => Promise<any>;
    private static map;
}
