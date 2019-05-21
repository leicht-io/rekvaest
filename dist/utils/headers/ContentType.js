var ContentType = (function () {
    function ContentType() {
    }
    ContentType.isJson = function (contentType) {
        return !!contentType.match(/application\/json/);
    };
    return ContentType;
}());
export default ContentType;
//# sourceMappingURL=ContentType.js.map