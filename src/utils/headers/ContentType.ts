export default class ContentType {
    public static isJson(contentType: string): boolean {
        return !!contentType.match(/application\/json/);
    }
}
