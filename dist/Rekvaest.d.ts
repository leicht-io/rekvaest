export declare class Rekvaest {
    static get: (url: string) => Promise<any>;
    static post: (url: string, data: FormData) => Promise<any>;
    static delete: () => void;
    static upload: () => void;
    private static map;
}
