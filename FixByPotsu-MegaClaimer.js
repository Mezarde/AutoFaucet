// ==UserScript==
// @name         megaclaimer
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Clica automaticamente no botão Start Claim na página e repete a cada 5 minutos
// @autor        Potsu
// @match        https://megaclaimer.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=megaclaimer.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var linkGithub = document.createElement('a');
    linkGithub.href = 'https://github.com/potisu';
    linkGithub.textContent = 'Github';
    linkGithub.target = '_blank';
    linkGithub.style.position = 'fixed';
    linkGithub.style.bottom = '20px';
    linkGithub.style.right = '20px';
    linkGithub.style.color = 'green';
    linkGithub.style.backgroundColor = 'black';
    linkGithub.style.fontSize = '14px';
    linkGithub.style.textDecoration = 'none';
    linkGithub.style.padding = '10px';
    linkGithub.style.borderRadius = '5px';
    linkGithub.style.zIndex = '1000';
    document.body.appendChild(linkGithub);

    var messageDiv = document.createElement('div');
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '20px';
    messageDiv.style.color = 'green';
    messageDiv.style.backgroundColor = 'black';
    messageDiv.style.fontSize = '14px';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '9999';
    messageDiv.textContent = 'By Potsu';
    document.body.appendChild(messageDiv);

    function clicarNoBotaoStartClaim() {
        var botaoStartClaim = document.querySelector('a.sl_claim');
        if (botaoStartClaim && botaoStartClaim.textContent.trim() === 'Start Claim') {
            botaoStartClaim.click();
            console.log('Botão Start Claim clicado:', botaoStartClaim);
        } else {
            console.log('Botão Start Claim não encontrado ou não corresponde.');
        }
    }

    function clicarComDelay() {
        setTimeout(function() {
            console.log('Tentando clicar no botão Start Claim...');
            clicarNoBotaoStartClaim();
        }, 5000);
    }

    function principal() {
        if (document.readyState === 'complete') {
            clicarComDelay();
            setInterval(function() {
                console.log('Intervalo de 5 minutos - tentando clicar no botão Start Claim...');
                clicarNoBotaoStartClaim();
            }, 300000);
        } else {
            window.addEventListener('load', principal);
        }
    }

    principal();

    function contemPalavrasAlvo(elemento, palavrasAlvo) {
        for (let palavra of palavrasAlvo) {
            if (elemento.innerText.includes(palavra)) {
                return true;
            }
        }
        return false;
    }

    const palavrasAlvo = ["Rsshort", "Exalink", "Easycut", " 0/10 veiws"];
    let cards = document.querySelectorAll("div.card1.elm");
    cards.forEach(card => {
        if (contemPalavrasAlvo(card, palavrasAlvo)) {
            card.remove();
        }
    });

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches("div.card1.elm")) {
                    if (contemPalavrasAlvo(node, palavrasAlvo)) {
                        node.remove();
                    }
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

})();
