//$(".loadMore").click(loadMorePosts);
var _this = document.getElementById("js-load-more");
_this.onclick = loadMorePosts;

var HttpClient = function() {
    this.get = function(Url, Callback) {
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onreadystatechange = function() {
            if (HttpRequest.readyState == 4 && HttpRequest.status == 200)
                Callback(HttpRequest.responseText);
        }

        HttpRequest.open( "GET", Url, true );
        HttpRequest.send( null );
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function loadMorePosts() {
 //var _this = document.getElementById("js-load-more");
 var blogContainer = document.getElementById("js-post-container"); //$("#js-post-container");
 var nextPage = parseInt(blogContainer.dataset.page) + 1; //parseInt($blogContainer.attr("data-page")) + 1;
 var totalPages = parseInt(blogContainer.dataset.totalPages); //parseInt($blogContainer.attr("data-totalPages"));

 _this.className += " loading";

 Client = new HttpClient();
 Client.get('/page' + nextPage, function(data) {
    parser = new DOMParser();
    var htmlData = parser.parseFromString(data, "text/html");;
    var articles = htmlData.getElementsByTagName("article");
    console.log(articles);
    blogContainer.innerHTML += data;

    if (blogContainer.dataset.totalPages == nextPage) {
      document.getElementById("js-load-more").remove();
    }
    _this.className = "";

 });
 // $.get("/page" + nextPage, function (data) {
 //   var htmlData = $.parseHTML(data);
 //   console.log(htmlData);
 //   var $articles = $(htmlData).find("article");

 //   blogContainer.attr("data-page", nextPage).append($articles);

 //   if (blogContainer.attr("data-totalPages") == nextPage) {
 //     $(".loadMore").remove();
 //   }

 //   $(_this).removeClass("loading");
 // });
}
//---- native js----
