function create(words) {

    let mainDivElement = document.getElementById(`content`);

    for (let word of words) {
        let div = document.createElement(`div`);
        let p = document.createElement(`p`);
        p.textContent = word;
        div.appendChild(p);
        p.style.display = `none`;
        div.addEventListener(`click`, display)
        mainDivElement.appendChild(div);
    }

    function display(e) {
        e.target.children[0].style.display = `block`
    }

}