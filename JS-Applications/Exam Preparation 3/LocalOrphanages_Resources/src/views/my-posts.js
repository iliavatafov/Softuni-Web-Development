import {get } from '../api/api.js'
import { html } from '../lib.js'
import { getUserData } from '../util.js'

const myPostsTemplate = (userPosts, postCard) => html `
  <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            ${userPosts.length > 0 ? 
            html`<div class="my-posts">
                ${userPosts.map(postCard)}
                </div>` : 
            html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}         
        </section>`

        const postCard = (post) => html`
        <div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`

export async function myPostsPage(ctx) {
    const userData = getUserData();
    const userPosts = await get(`/data/posts?where=_ownerId%3D%22${userData.id}%22&sortBy=_createdOn%20desc`);
    ctx.render(myPostsTemplate(userPosts, postCard));
}