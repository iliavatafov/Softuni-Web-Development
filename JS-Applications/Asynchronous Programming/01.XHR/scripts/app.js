function loadRepos() {

    const btn = document.querySelector(`button`);
    const div = document.querySelector(`#res`);

    btn.addEventListener(`click`, function leadRepos() {

        let url = `https://api.github.com/users/testnakov/repos`;

        const httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener(`readystatechange`, function() {

            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                div.textContent = httpRequest.responseText;
            }
        });

        httpRequest.open(`GET`, url);
        httpRequest.send();
    });

}