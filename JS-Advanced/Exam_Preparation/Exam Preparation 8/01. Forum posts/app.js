window.addEventListener("load", solve);

function solve() {

    const reviewListElement = document.getElementById('review-list');
    const titleElement = document.getElementById('post-title');
    const categoryElement = document.getElementById('post-category');
    const contentElement = document.getElementById('post-content');

    document.getElementById('publish-btn').addEventListener('click', onPublish);


    function onPublish(ev) {
        ev.preventDefault();

        if (titleElement.value != '' && categoryElement.value != '' && contentElement.value) {
            const li = e('li', 'rpost');
            let article = e('article', undefined, undefined);
            e('h4', undefined, titleElement.value, article);
            e('p', undefined, `Category: ${categoryElement.value}`, article);
            e('p', undefined, `Content: ${contentElement.value}`, article);
            e('button', 'action-btn edit', 'Edit', li);
            e('button', 'action-btn approve', 'Approve', li);
            li.appendChild(article);

            reviewListElement.appendChild(li);

            const title = titleElement.value;
            const category = categoryElement.value;
            const content = contentElement.value;

            document.getElementsByClassName('action-btn edit')[0].addEventListener('click', onEdit);
            document.getElementsByClassName('action-btn approve')[0].addEventListener('click', onApprove);

            titleElement.value = '';
            categoryElement.value = '';
            contentElement.value = '';

            function onEdit(ev) {
                ev.preventDefault();

                titleElement.value = title;
                categoryElement.value = category;
                contentElement.value = content;

                ev.target.parentElement.remove();
            }

            function onApprove(ev) {
                ev.preventDefault();

                const newLi = e('li', 'rpost');
                const newArticle = e('article', undefined, undefined);
                e('h4', undefined, title, newArticle);
                e('p', undefined, `Category: ${category}`, newArticle);
                e('p', undefined, `Content: ${content}`, newArticle);
                newLi.appendChild(newArticle);

                document.getElementById('published-list').appendChild(newLi);
                ev.target.parentElement.remove();
                document.getElementById('clear-btn').addEventListener('click', (ev) => {
                    ev.preventDefault();
                    newLi.remove();
                });
            }
        }


    }

    function e(elementType, classAtr, content, parentElement) {
        const element = document.createElement(elementType);

        if (classAtr != undefined) {
            element.classList = classAtr;
        }

        if (content != undefined) {
            element.textContent = content;
        }

        if (parentElement !== undefined) {
            parentElement.appendChild(element);
        }

        return element;
    }
}