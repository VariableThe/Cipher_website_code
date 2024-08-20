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

function processAutokey(action) {
    const message = document.getElementById('autokeyInputText').value.toUpperCase();
    const key = document.getElementById('autokeyKeyText').value.toUpperCase();
    let result = '';

    if (action === 'encode') {
        result = encodeAutokey(message, key);
    } else if (action === 'decode') {
        result = decodeAutokey(message, key);
    }

    document.getElementById('autokeyResult').textContent = 'Result: ' + result;
}

function encodeAutokey(message, key) {
    let encodedMessage = key;
    for (let i = 0; i < message.length; i++) {
        let messageChar = message.charCodeAt(i);
        let keyChar = encodedMessage.charCodeAt(i);

        if (messageChar >= 65 && messageChar <= 90) {
            let shift = (messageChar - 65 + keyChar - 65) % 26;
            let encodedChar = String.fromCharCode(shift + 65);
            encodedMessage += encodedChar;
        } else {
            encodedMessage += message[i];
        }
    }
    return encodedMessage.substring(key.length);
}

function decodeAutokey(message, key) {
    let decodedMessage = '';
    let combinedText = key + message;

    for (let i = 0; i < message.length; i++) {
        let messageChar = message.charCodeAt(i);
        let keyChar = combinedText.charCodeAt(i);

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