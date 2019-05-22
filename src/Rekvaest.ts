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

    // TODO: Implement POST
    // TODO: Implement DELETE
    // TODO: Implement UPLOAD

    private static map(xmlHttpRequest: XMLHttpRequest): any {
        const contentType: string | null = xmlHttpRequest.getResponseHeader(HttpHeaders.CONTENT_TYPE);

        if (contentType && ContentType.isJson(contentType)) {
            return JSON.parse(xmlHttpRequest.response);
        }

        // TODO: Support multiple data types

        return JSON.parse(xmlHttpRequest.response);
    }
}
