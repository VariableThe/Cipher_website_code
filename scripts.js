function processROT3(action) {
    const inputText = document.getElementById('rot3InputText').value.toUpperCase();
    let result = '';
    if (action === 'encode') {
        result = encodeROT3(inputText);
    } else if (action === 'decode') {
        result = decodeROT3(inputText);
    }
    document.getElementById('rot3Result').textContent = 'Result: ' + result;
}

function encodeROT3(text) {
    return text.replace(/[A-Z]/g, char =>
        String.fromCharCode((char.charCodeAt(0) - 65 + 3) % 26 + 65)
    );
}

function decodeROT3(text) {
    return text.replace(/[A-Z]/g, char =>
        String.fromCharCode((char.charCodeAt(0) - 65 - 3 + 26) % 26 + 65)
    );
}

function processVigenere(action) {
    const message = document.getElementById('vigenereInputText').value.toUpperCase();
    const key = document.getElementById('vigenereKeyText').value.toUpperCase();
    let result = '';
    if (action === 'encode') {
        result = encodeVigenere(message, key);
    } else if (action === 'decode') {
        result = decodeVigenere(message, key);
    }
    document.getElementById('vigenereResult').textContent = 'Result: ' + result;
}

function encodeVigenere(message, key) {
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
        let messageChar = message.charCodeAt(i);
        let keyChar = key.charCodeAt(i % key.length);
        if (messageChar >= 65 && messageChar <= 90) {
            let shift = (messageChar - 65 + keyChar - 65) % 26;
            let encodedChar = String.fromCharCode(shift + 65);
            encodedMessage += encodedChar;
        } else {
            encodedMessage += message[i];
        }
    }
    return encodedMessage;
}

function decodeVigenere(message, key) {
    let decodedMessage = '';
    for (let i = 0; i < message.length; i++) {
        let messageChar = message.charCodeAt(i);
        let keyChar = key.charCodeAt(i % key.length);
        if (messageChar >= 65 && messageChar <= 90) {
            let shift = (messageChar - 65 - (keyChar - 65) + 26) % 26;
            let decodedChar = String.fromCharCode(shift + 65);
            decodedMessage += decodedChar;
        } else {
            decodedMessage += message[i];
        }
    }
    return decodedMessage;
}
