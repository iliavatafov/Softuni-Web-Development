function loadRepos() {

    const ulRepos = document.querySelector(`#repos`);
    const input = document.querySelector(`input`);
    const btn = document.querySelector(`button`);

    btn.addEventListener(`click`, () => {

        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then(response => {

                if (response.ok === false) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                return response.json()
            })
            .then(hadleResponse)
            .catch(hadleError);

        function hadleResponse(data) {

            Array.from(ulRepos.childNodes).forEach(el => el.remove());

            for (let repo of data) {
                const liElement = document.createElement(`li`);
                liElement.innerHTML = `<li>
                <a href="${repo.html_url}">
                    ${repo.full_name}
                </a>
            </li>`;

                ulRepos.appendChild(liElement);
            }
        }

        function hadleError(error) {
            Array.from(ulRepos.childNodes).forEach(el => el.remove());
            ulRepos.textContent = `${error.message}`;
        }
    });
}