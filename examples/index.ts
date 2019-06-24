import {Rekvaest} from "../dist";

export default class Index {
    private baseUrl: string = "https://jsonplaceholder.typicode.com/";

    constructor() {
        Rekvaest.get(this.baseUrl + "todos/1").then(response => {
            console.log(response);
        }, rejection => {
            console.log(rejection);
        })

        const data: FormData = new FormData();
        data.append("test", "hi");

        Rekvaest.post(this.baseUrl, data).then(response => {
            console.log(response);
        }, rejection => {
            console.log(rejection);
        })
    }
}

new Index();
