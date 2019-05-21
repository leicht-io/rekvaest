import HttpStatusCode from "./models/HttpStatusCode";
import HttpTypes from "./models/HttpTypes";
import HttpHeaders from "./models/HttpHeaders";
import ContentType from "./utils/headers/ContentType";
var Rekvaest = (function () {
    function Rekvaest() {
    }
    Rekvaest.map = function (xmlHttpRequest) {
        var contentType = xmlHttpRequest.getResponseHeader(HttpHeaders.CONTENT_TYPE);
        if (contentType && ContentType.isJson(contentType)) {
            return JSON.parse(xmlHttpRequest.response);
        }
        return JSON.parse(xmlHttpRequest.response);
    };
    Rekvaest.get = function (url) {
        return new Promise(function (resolve, reject) {
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open(HttpTypes.GET, url);
            xmlHttpRequest.onload = function () {
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
    return Rekvaest;
}());
export default Rekvaest;
//# sourceMappingURL=Rekvaest.js.map