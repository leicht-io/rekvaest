import Rekvaest from "../src/Rekvaest";

export default class Index {
    private baseUrl: string = "https://jsonplaceholder.typicode.com/";

    constructor() {
        Rekvaest.get(this.baseUrl + "todos/1").then(response => {
            console.log(response);
        }, rejection => {
            console.log(rejection);
        })
    }
}

new Index();
