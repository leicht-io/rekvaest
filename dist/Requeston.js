import HttpStatusCode from "./models/HttpStatusCode";
import HttpTypes from "./models/HttpTypes";
import HttpHeaders from "./models/HttpHeaders";
import ContentType from "./utils/headers/ContentType";
var Requeston = (function () {
    function Requeston() {
    }
    Requeston.map = function (xmlHttpRequest) {
        var contentType = xmlHttpRequest.getResponseHeader(HttpHeaders.CONTENT_TYPE);
        if (contentType && ContentType.isJson(contentType)) {
            return JSON.parse(xmlHttpRequest.response);
        }
        return JSON.parse(xmlHttpRequest.response);
    };
    Requeston.get = function (url) {
        return new Promise(function (resolve, reject) {
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open(HttpTypes.GET, url);
            xmlHttpRequest.onload = function () {
                if ((xmlHttpRequest.status < HttpStatusCode.OK || xmlHttpRequest.status >= HttpStatusCode.MULTIPLE_CHOICES)) {
                    reject({ request: xmlHttpRequest });
                }
                else {
                    resolve(Requeston.map(xmlHttpRequest));
                }
            };
            xmlHttpRequest.onerror = function () {
                reject({ request: xmlHttpRequest });
            };
            xmlHttpRequest.send();
        });
    };
    return Requeston;
}());
export default Requeston;
//# sourceMappingURL=Requeston.js.map