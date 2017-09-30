var run = function () {
    console.log('loading');
    document.body.innerHTML = '';
    var plainDictionary = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        symbolDictionary = plainDictionary + '!"%C2%A3$%^&*()_+-={}[]:@~;#?,./|\\',
        body = document.createElement('div'),
        textBox = document.createElement('input'),
        createTextNode = 'createTextNode',
        createElement = 'createElement',
        addButton = function (dictionary, passwordLength) {
            var goButton = document.createElement('button');
            goButton.appendChild(
                document.createTextNode('x' + passwordLength)
            );
            goButton.onclick = function () {
                var randomData = new Uint8Array(passwordLength),
                    i = randomData.length - 1,
                    passwordString = ''
                ;
                window.crypto.getRandomValues(randomData);
                while (i) {
                    passwordString += dictionary[randomData[i--] % dictionary.length];
                }
                textBox.value = passwordString;
                textBox.select();
            };
            body.appendChild(goButton);
        },
        newline = function () {
            appendObj(createElement, 'br');
        },
        appendObj = function (R, t) {
            body.appendChild(document[R](t));
        };
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('PwGen'));

    textBox.setAttribute('readonly', 'readonly');
    textBox.setAttribute('aria-label', 'password output field');

    var container = document.createElement('div');
    container.appendChild(body);
    document.body.appendChild(container);
    body.onclick = function () {
        textBox.select();
    };
    var goButton = document.createElement('button');

    goButton.appendChild(document.createTextNode('reveal'));
    goButton.onclick = function () {
        textBox.style.width = '550px';
        goButton.style.display = 'none';
    };

    var copied = document.createElement('span');
    copied.style.visibility = 'hidden';
    copied.appendChild(document.createTextNode('copied!'));

    var p = document.createElement('p');
    p.innerHTML =
        'A <a target="_blank" rel="noopener" href="https://developers.google.com/web/progressive-web-apps">progressive web-app</a> ' +
        '<br>' +
        'created by ' +
        '<a target="_blank" rel="noopener" href="https://stampy.me/2017/09/password-generator-responsive-web-app/">@stampycode</a>.'
    ;

    body.appendChild(h1);
    body.appendChild(textBox);
    body.appendChild(goButton);
    body.appendChild(copied);
    newline();
    addButton(plainDictionary, 16);
    addButton(plainDictionary, 32);
    addButton(plainDictionary, 64);
    appendObj(createTextNode, ' a-zA-Z0-9');
    newline();
    addButton(symbolDictionary, 16);
    addButton(symbolDictionary, 32);
    addButton(symbolDictionary, 64);
    appendObj(createTextNode, ' +symbols');
    newline();
    body.appendChild(p);


    // Auto-copy-to-clipboard
    textBox.onclick = function() {
        textBox.select();
        if(!textBox.value) {
            return;
        }
        try {
            document.execCommand('copy');
            copied.style.visibility = 'visible';
            setTimeout(function(){
                copied.style.visibility = 'hidden';
            }, 1000);
        } catch (err) {
        }
    };
    textBox.onfocus = textBox.onclick;

    // Service worker for Progressive Web App
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', {
            scope: '/pwgen/' // THIS IS REQUIRED FOR RUNNING A PROGRESSIVE WEB APP FROM A NON_ROOT PATH
        }).then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }
};
window.addEventListener('load', run);
