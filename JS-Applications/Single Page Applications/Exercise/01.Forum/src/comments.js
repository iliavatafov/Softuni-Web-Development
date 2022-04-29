import { setDate } from "./createPost.js";
import { e } from "./dom.js";

const topicInputDiv = document.querySelector(`#topicView`);
const commentsViewDiv = document.querySelector(`#commentsView`);

export function showCommentsView(ev, data) {
    ev.preventDefault();

    const dateText = setDate();

    topicInputDiv.style.display = `none`;

    const element = e(`div`, { className: `comment` });
    element.innerHTML = `<div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${data.username}</span> posted on <time>${dateText}</time></p>
    
        <p class="post-content">${data.postText}</p>
    <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
    </div>`

    commentsViewDiv.replaceChildren(element);


}