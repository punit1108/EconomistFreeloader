(function main() {

    scrapper()
    document.addEventListener("DOMContentLoaded", function () {
        var blog_links = document.getElementsByClassName("teaser__link")

        for(var i = 0; i< blog_links.length; i++) {
            blog_links[i].addEventListener("click", function() {
                scrapper()
            })
        }
    })
}())

function scrapper() {
    try {
        var blog_content = document.querySelectorAll(".blog-post__text p")
        var blog_title = document.querySelector(".main-content__blog-post .flytitle-and-title__title").textContent
        var blog_tagline = document.querySelector(".blog-post__description").textContent
    } catch (e) {
        console.log(e)
        return;
    }
    console.log(blog_title)

    var tab_html = "<h1>" + blog_title + "</h1><br><h3>" + blog_tagline + "</h3><br><br><br>"

    blog_content.forEach(node => {
        console.log(blog_content.innerHTML)
        tab_html += node.outerHTML
    })

    var article = window.open()
    article.document.write(tab_html)
    // article.document.addEventListener("DOMContentLoaded", function() {
        article.document.title = blog_title
    // })
}
