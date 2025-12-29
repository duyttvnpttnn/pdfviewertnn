document.addEventListener("DOMContentLoaded", function () {

const article = document.querySelector(".ArticleContent");
const link = article?.querySelector("a");

if (link) {
    const pdfUrl = link.getAttribute("href").trim();
    link.style.display = "none";

    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "800px";

    wrapper.innerHTML = `
        <div 
            class="_df_book"
            id="df_manual_book"
            source="${pdfUrl}"
            webgl="true"
            style="height:800px"
        ></div>
    `;

    article.appendChild(wrapper);
}


if (window.DFLIP) {
    DFLIP.parseBooks();
}

});