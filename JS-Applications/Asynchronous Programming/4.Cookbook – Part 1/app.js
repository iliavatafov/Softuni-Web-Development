window.addEventListener('load', loadRecipes);

function loadRecipes() {

    takeData();

    async function takeData() {

        const url = `http://localhost:3030/jsonstore/cookbook/recipes`;

        try {
            let response = await fetch(url);

            if (response.status !== 200) {
                throw new Error(`Error: ${response.status} (${response.statusText})`);
            }

            let data = await response.json();


            for (let element of Object.values(data)) {

                const article = e(`article`, undefined, `class`, `preview`, document.querySelector(`main`));
                const titleDiv = e(`div`, undefined, `class`, `title`, article);
                e(`h2`, element.name, undefined, undefined, titleDiv);
                const imgDiv = e(`div`, undefined, `class`, `small`, article);
                e(`img`, undefined, `src`, element.img, imgDiv);

                let resp = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${element._id}`);

                let details = await resp.json();

                const detailsArticle = e(`article`, undefined, undefined, undefined, document.querySelector(`main`));
                detailsArticle.style.display = `none`;
                let headerDetails = e(`h2`, details.name, undefined, undefined, detailsArticle);
                let bandDiv = e(`div`, undefined, `class`, `band`, detailsArticle);
                let imgDivEl = e(`div`, undefined, `class`, `thumb`, bandDiv);
                e(`img`, undefined, `src`, details.img, imgDivEl);
                let ingredientsDiv = e(`div`, undefined, `class`, `ingredients`, bandDiv);
                e(`h3`, `Ingredients:`, undefined, undefined, ingredientsDiv);
                let ul = e(`ul`, undefined, undefined, undefined, ingredientsDiv);

                for (let ingridient of details.ingredients) {
                    e(`li`, ingridient, undefined, undefined, ul);
                }

                article.addEventListener(`click`, () => {
                    if (detailsArticle.style.display === `none`) {
                        article.style.display = `none`;
                        detailsArticle.style.display = `block`;
                    }
                });

                headerDetails.addEventListener(`click`, () => {
                    detailsArticle.style.display = `none`;
                    article.style.display = `block`;

                });

                let descriptionDiv = e(`div`, undefined, `class`, `description`, detailsArticle);
                e(`h3`, `Preparation:`, undefined, undefined, descriptionDiv);

                for (let step of details.steps) {
                    e(`p`, step, undefined, undefined, descriptionDiv);
                }
            }


        } catch (err) {
            console.log(err);
        }

    }

    function e(elementType, innerText, attribute, attributeText, parent) {

        let newElement = document.createElement(elementType);
        newElement.textContent = innerText;

        if (attribute) {
            newElement.setAttribute(attribute, attributeText);
        }

        if (parent) {
            parent.appendChild(newElement);
        }

        return newElement;

    }
}