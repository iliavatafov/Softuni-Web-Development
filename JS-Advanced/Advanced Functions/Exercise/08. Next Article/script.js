function getArticleGenerator(articles) {

    let array = articles;

    return () => {
        if (array.length > 0) {
            let conteiner = document.getElementById(`content`);
            let article = document.createElement(`article`);
            let currentArticle = array.shift();
            article.textContent = currentArticle;
            conteiner.appendChild(article);
        }
    }
}