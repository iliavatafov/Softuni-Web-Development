function toggle() {

    let buttonText = document.getElementsByClassName(`button`)[0];
    let extraText = document.querySelector(`#extra`);

    if (buttonText.textContent === `More`) {

        buttonText.textContent = `Less`;
        extraText.style.display = `block`;

    } else {

        buttonText.textContent = `More`;
        extraText.style.display = `none`;
    }

}