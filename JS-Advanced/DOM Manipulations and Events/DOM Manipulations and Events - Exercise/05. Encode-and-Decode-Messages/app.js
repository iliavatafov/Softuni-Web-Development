function encodeAndDecodeMessages() {

    let encodeButtonElement = document.querySelector(`main div:nth-child(1) button`);
    let decodeButtonElement = document.querySelector(`main div:nth-child(2) button`);

    encodeButtonElement.addEventListener(`click`, encode);
    decodeButtonElement.addEventListener(`click`, decode);


    function encode(e) {

        let inputTextEncode = e.target.parentNode.querySelector(`textarea`).value;

        let arrayFromInput = inputTextEncode.split(``);

        let currentChar = arrayFromInput.shift();

        let encodedMessage = [];

        while (currentChar) {

            let asciCodeOfCurrentChar = currentChar.charCodeAt();
            let newCharFromAsciCode = String.fromCharCode(asciCodeOfCurrentChar + 1);
            encodedMessage.push(newCharFromAsciCode);

            currentChar = arrayFromInput.shift();
        }

        e.target.parentNode.querySelector(`textarea`).value = ``;

        let inputTextDecode = e.target.parentNode.parentNode.querySelector(`div:nth-child(2) textarea`);
        inputTextDecode.value = encodedMessage.join(``);
    }

    function decode(e) {

        let inputTextDecode = e.target.parentNode.querySelector(`textarea`).value;

        let arrayFromInput = inputTextDecode.split(``);

        let currentChar = arrayFromInput.shift();

        let decodeMessage = [];

        while (currentChar) {

            let asciCodeOfCurrentChar = currentChar.charCodeAt();
            let newCharFromAsciCode = String.fromCharCode(asciCodeOfCurrentChar - 1);
            decodeMessage.push(newCharFromAsciCode);

            currentChar = arrayFromInput.shift();
        }

        e.target.parentNode.querySelector(`textarea`).value = decodeMessage.join(``);
    }
}