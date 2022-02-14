function attachGradientEvents() {

    let resultDivElement = document.getElementById(`result`);
    let gredientDivElement = document.getElementById(`gradient`);

    gredientDivElement.addEventListener(`mousemove`, loadingPracentage);

    function loadingPracentage(e) {

        let loadingPixelsElement = Number(e.offsetX);
        let totalWidth = Number(e.target.clientWidth);

        resultDivElement.textContent = `${Math.trunc((loadingPixelsElement / totalWidth) * 100)}%`

    }

}