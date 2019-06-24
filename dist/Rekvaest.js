import HttpStatusCode from "./models/HttpStatusCode";
import HttpTypes from "./models/HttpTypes";
import HttpHeaders from "./models/HttpHeaders";
import ContentType from "./utils/headers/ContentType";
export class Rekvaest {
    static map(xmlHttpRequest) {
        const contentType = xmlHttpRequest.getResponseHeader(HttpHeaders.CONTENT_TYPE);
        if (contentType && ContentType.isJson(contentType)) {
            return JSON.parse(xmlHttpRequest.response);
        }
        return JSON.parse(xmlHttpRequest.response);
    }
}
Rekvaest.get = (url) => {
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open(HttpTypes.GET, url);
        xmlHttpRequest.onload = () => {
            if ((xmlHttpRequest.status < HttpStatusCode.OK || xmlHttpRequest.status >= HttpStatusCode.MULTIPLE_CHOICES)) {
                reject({ request: xmlHttpRequest });
            }
            else {
                resolve(Rekvaest.map(xmlHttpRequest));
            }
        };
        xmlHttpRequest.onerror = function () {
            reject({ request: xmlHttpRequest });
        };
        xmlHttpRequest.send();
    });
};
Rekvaest.post = (url, data) => {
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest();
        const urlSearchParams = new URLSearchParams(data).toString();
        xmlHttpRequest.open(HttpTypes.POST, url);
        xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlHttpRequest.onload = () => {
            if ((xmlHttpRequest.status < HttpStatusCode.OK || xmlHttpRequest.status >= HttpStatusCode.MULTIPLE_CHOICES)) {
                reject({ request: xmlHttpRequest });
            }
            else {
                resolve(Rekvaest.map(xmlHttpRequest));
            }
        };
        xmlHttpRequest.onerror = function () {
            reject({ request: xmlHttpRequest });
        };
        xmlHttpRequest.send(urlSearchParams);
    });
};
Rekvaest.delete = () => {
};
Rekvaest.upload = () => {
};
//# sourceMappingURL=Rekvaest.js.map