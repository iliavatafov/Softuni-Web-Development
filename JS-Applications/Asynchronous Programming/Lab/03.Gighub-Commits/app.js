function loadCommits() {

    const usernameElement = document.querySelector(`#username`);
    const repoElement = document.querySelector(`#repo`);
    const commits = document.querySelector(`#commits`);
    const btn = document.querySelector(`button`);

    btn.addEventListener(`click`, load)

    function load(ev) {

        ev.preventDefault();

        const url = `https://api.github.com/repos/${usernameElement.value}/${repoElement.value}/commits`;

        takeRepos(url);
    }

    async function takeRepos(url) {

        try {

            const response = await fetch(url);

            if (response.ok !== true) {
                throw new Error(`Error: ${response.status} (${response.statusText})`);
            }

            const data = await response.json();

            commits.innerHTML = ``;

            for (let commitData of data) {
                const newLi = document.createElement(`li`);
                newLi.textContent = `${commitData.commit.author.name} : ${commitData.commit.message}`;
                commits.appendChild(newLi);
            }

        } catch (err) {
            commits.innerHTML = ``;
            const liElement = document.createElement(`li`);
            liElement.textContent = `${err.message}`;
            commits.appendChild(liElement);
        }

    }

}