var _this = document.getElementById("js-load-more");
_this.onclick = loadMorePosts;

var HttpClient = function() {
    'use strict';
    this.get = function(Url, Callback) {
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onreadystatechange = function() {
            if (HttpRequest.readyState == 4 && HttpRequest.status == 200)
                Callback(HttpRequest.responseText);
        };

        HttpRequest.open("GET", Url, true);
        HttpRequest.send(null);
    };
};

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function loadMorePosts() {
    var blogContainer = document.getElementById("js-post-container");
    var nextPage = parseInt(blogContainer.dataset.page) + 1;

    _this.className += " loading";

    Client = new HttpClient();
    Client.get('/page' + nextPage, function(data) {
        parser = new DOMParser();
        var htmlData = parser.parseFromString(data, "text/html");
        var articles = htmlData.getElementsByTagName("article");
        blogContainer.parentNode.insertBefore(articles[0], blogContainer.nextSibling);

        if (blogContainer.dataset.totalPages == nextPage) {
            document.getElementById("js-load-more").remove();
        }
        _this.className = "";

    });
}
