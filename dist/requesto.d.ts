export default class Requesto {
    static get: (url: string) => Promise<any>;
    private static map;
}
