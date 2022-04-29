import { showCommentsView } from "./comments.js";
import { e } from "./dom.js";

const topicInputDiv = document.querySelector(`#topicView`);

const cancelBtn = document.querySelector(`.cancel`);



const form = document.querySelector(`form`);
form.addEventListener(`submit`, onPost);

cancelBtn.addEventListener(`click`, onCancel)

export async function onPost(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const topicName = formData.get(`topicName`).trim();
    const username = formData.get(`username`).trim();
    const postText = formData.get(`postText`).trim();

    if (topicName != `` && username != `` && postText != ``) {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
                method: `post`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ topicName, username, postText })
            });

            if (res.ok == false) {
                const error = await res.json();
                throw new Error(error.message);
            }

            const data = await res.json();

            const newElement = createPost(data);

            newElement.addEventListener(`click`, showCommentsView.bind(null, ev, data))

            topicInputDiv.appendChild(newElement);

            form.reset()

        } catch (err) {
            alert(err.message);
        }
    } else {
        alert(`Please fill all fields.`);
    }
}

function createPost(data) {
    const element = e(`div`, { className: `comment`, id: data._id })

    element.innerHTML = `<div class="topic-container">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${setDate()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`

    return element
}

export function setDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    if (month < 10) {
        month = `0${month}`
    }
    let day = date.getDay();
    if (day < 10) {
        day = `0${day}`
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let secondst = date.getSeconds();
    if (secondst < 10) {
        secondst = `0${secondst}`
    }

    const result = `Date: ${year}-${month}-${day}T${hour}:${minutes}:${secondst}`

    return result;
}

function onCancel(ev) {
    ev.preventDefault();
    form.reset();
}