function lockedProfile() {

    const mainElement = document.querySelector(`#main`)

    async function getData() {

        const url = `http://localhost:3030/jsonstore/advanced/profiles`;

        const request = await fetch(url);

        const data = await request.json();

        return data;
    }

    function createProfile(profileData) {

        const wrapper = document.createElement(`div`);
        wrapper.className = `profile`;


        wrapper.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="${profileData.username}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="${profileData.username}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="${profileData.username}Username" value="${profileData.username}" disabled readonly />
        <div class="hiddenInfo">
            <hr>
            <label>Email:</label>
            <input type="email" name="${profileData.username}Email" value="${profileData.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="${profileData.username}Age" value="${profileData.age}" disabled readonly />
        </div>

        <button class="show">Show more</button>
        <button class="hide" style="display: none">Hide it</button>`



        return wrapper;
    }

    async function displayData() {

        mainElement.innerHTML = ``;

        const data = await getData();

        Object.entries(data).forEach(profile => {
            const profileHTML = createProfile(profile[1]);
            mainElement.appendChild(profileHTML);
        });

        Array.from(mainElement.children).forEach(profile => {

            const showBtn = profile.querySelector(`.show`);
            const hideBtn = profile.querySelector(`.hide`);

            showBtn.addEventListener(`click`, showInfo)
            hideBtn.addEventListener(`click`, hideInfo)
        });
    }

    function showInfo(ev) {

        const isLocked = ev.target.parentNode.querySelector(`input`).checked;

        if (!isLocked) {
            Array.from(ev.target.parentNode.querySelector(`.hiddenInfo`).children).forEach(el => el.style.display = `block`);
            ev.target.style.display = `none`;
            ev.target.parentNode.querySelector(`.hide`).style.display = `block`;
        }

    }

    function hideInfo(ev) {

        const isLocked = ev.target.parentNode.querySelector(`input`).checked;
        console.log(isLocked)

        if (!isLocked) {
            Array.from(ev.target.parentNode.querySelector(`.hiddenInfo`).children).forEach(el => el.style.display = `none`);
            ev.target.style.display = `none`;
            ev.target.parentNode.querySelector(`.show`).style.display = `block`;
        }
    }


    displayData()


}