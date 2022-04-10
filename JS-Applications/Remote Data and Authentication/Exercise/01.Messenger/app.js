function attachEvents() {
    const submitBtn = document.getElementById(`submit`);
    const refreshBtn = document.getElementById(`refresh`);

    submitBtn.addEventListener(`click`, onSubmit);
    refreshBtn.addEventListener(`click`, onRefresh);

    onRefresh();
}

async function onSubmit() {

    const textArea = document.getElementById(`messages`);

    await postData();

    const data = await getData();


    textArea.value = Object.values(data).map(messageData => `${messageData.author}: ${messageData.content}`).join(`\n`);

    alert(`Message is successfully sent!`);
}

async function onRefresh() {

    const textArea = document.getElementById(`messages`);

    const data = await getData();

    textArea.value = Object.values(data).map(messageData => `${messageData.author}: ${messageData.content}`).join(`\n`);
}

async function getData() {

    const url = `http://localhost:3030/jsonstore/messenger`;

    try {
        const req = await fetch(url);

        if (req.status !== 200) {
            const error = await req.json();
            throw new Error(error.message);
        }

        const data = await req.json();

        return data;

    } catch (err) {
        alert(err.message)
    }
}

async function postData() {

    const url = `http://localhost:3030/jsonstore/messenger`;

    const author = document.querySelector(`input[name="author"]`);
    const content = document.querySelector(`input[name="content"]`);

    const options = {
        method: `post`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ author: author.value, content: content.value })
    }

    author.value = ``;
    content.value = ``;

    try {
        const req = await fetch(url, options);

        if (req.status !== 200) {
            const error = await req.json();
            throw new Error(error.message);
        }

        const data = await req.json();

        return data;

    } catch (err) {
        alert(err.message)
    }
}

attachEvents();