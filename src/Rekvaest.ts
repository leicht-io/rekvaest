import HttpStatusCode from "./models/HttpStatusCode";
import HttpTypes from "./models/HttpTypes";
import HttpHeaders from "./models/HttpHeaders";
import ContentType from "./utils/headers/ContentType";

export class Rekvaest {
    public static get = (url: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const xmlHttpRequest = new XMLHttpRequest();

            xmlHttpRequest.open(HttpTypes.GET, url);
            xmlHttpRequest.onload = () => {
                if ((xmlHttpRequest.status < HttpStatusCode.OK || xmlHttpRequest.status >= HttpStatusCode.MULTIPLE_CHOICES)) {
                    reject({request: xmlHttpRequest});
                } else {
                    resolve(Rekvaest.map(xmlHttpRequest));
                }
            };
            xmlHttpRequest.onerror = function () {
                reject({request: xmlHttpRequest});
            };
            xmlHttpRequest.send();
        });
    };

    public static post = (url: string, data: FormData): Promise<any> => {
        return new Promise((resolve, reject) => {
            const xmlHttpRequest = new XMLHttpRequest();
            const urlSearchParams: string = new URLSearchParams(data as any).toString();

            xmlHttpRequest.open(HttpTypes.POST, url);
            xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xmlHttpRequest.onload = () => {
                if ((xmlHttpRequest.status < HttpStatusCode.OK || xmlHttpRequest.status >= HttpStatusCode.MULTIPLE_CHOICES)) {
                    reject({request: xmlHttpRequest});
                } else {
                    resolve(Rekvaest.map(xmlHttpRequest));
                }
            };
            xmlHttpRequest.onerror = function () {
                reject({request: xmlHttpRequest});
            };
            xmlHttpRequest.send(urlSearchParams);
        });
    };

    public static delete = (): void => {
        // TODO: Implement DELETE
    };

    public static upload = (): void => {
        // TODO: Implement UPLOAD
    };

    private static map(xmlHttpRequest: XMLHttpRequest): any {
        const contentType: string | null = xmlHttpRequest.getResponseHeader(HttpHeaders.CONTENT_TYPE);

        if (contentType && ContentType.isJson(contentType)) {
            return JSON.parse(xmlHttpRequest.response);
        }

        // TODO: Support multiple data types

        return JSON.parse(xmlHttpRequest.response);
    }
}
