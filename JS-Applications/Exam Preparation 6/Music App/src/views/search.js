import { search } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const searchTemplate = (onSearch, albumsData, searchCard, userData) => html `
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

            <!--Show after click Search button-->
            <div class="search-result">
                <!--If have matches-->
                ${albumsData.length > 0 ?
                albumsData.map(el => searchCard(el, userData)) :
                null}
                ${albumsData != -1 && albumsData.length == 0 ?
                html`<p class="no-result">No result.</p>` : null}

                <!--If there are no matches-->
                
            </div>
        </section>`

const searchCard = (data, userData) => html `
                <div class="card-box">
                    <img src="${data.imgUrl}">
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${data.name}</p>
                            <p class="artist">Artist: ${data.artist}</p>
                            <p class="genre">Genre: ${data.genre}</p>
                            <p class="price">Price: $${data.price}</p>
                            <p class="date">Release Date: ${data.date}</p>
                        </div>
                        ${userData ? html`<div class="btn-group">
                            <a href="/details/${data._id}" id="details">Details</a>
                        </div>` : null}
                    </div>
                </div>`

export async function searchView(ctx) {

    const userData = getUserData();

    async function onSearch() {

        

        const searchText = document.querySelector('#search-input');

        const albumsData = await search(encodeURIComponent(searchText.value));

        console.log(albumsData)

        ctx.render(searchTemplate(onSearch, albumsData, searchCard, userData));
        albumsData.value = '';
    }

    ctx.render(searchTemplate(onSearch, -1, searchCard, userData));


}