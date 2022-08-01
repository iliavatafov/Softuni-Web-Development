import {get } from '../api/api.js'
import { html } from '../lib.js'

const dashboardTemplate = (posts, cardTemplate) => html `
 <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            ${posts.length > 0 ?
            html`<div class="all-posts">${posts.map(cardTemplate)}</div>` :
            html`<h1 class="title no-posts-title">No posts yet!</h1>`
        }            
        </section>`

const cardTemplate = (post) => html `
                <div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img class="post-image" src="${post.imageUrl}">
                    <div class="btn-wrapper">
                        <a href="/details/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`


export async function dashbordPage(ctx  ) {
    const posts = await get('/data/posts?sortBy=_createdOn%20desc');
    ctx.render(dashboardTemplate(posts, cardTemplate));
}