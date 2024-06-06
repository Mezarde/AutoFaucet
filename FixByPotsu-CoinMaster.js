// ==UserScript==
// @name         CoinMaster
// @namespace    http://tampermonkey.net/
// @version      2024-05-06
// @description  tentar dominar o mundo!
// @author       Potsu
// @match        https://coinmasters.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coinmasters.online
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
    messageDiv.style.padding = '10px';
    messageDiv.style.backgroundColor = 'black';
    messageDiv.style.color = 'green';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '9999';
    messageDiv.textContent = 'By Potsu';
    document.body.appendChild(messageDiv);

    function clicarBotaoComDelay(selector, delay) {
        setTimeout(function() {
            var botao = document.querySelector(selector);
            if (botao) {
                botao.click();
            }
        }, delay);
    }

    window.addEventListener('load', function() {
        clicarBotaoComDelay('button[class="buttonbutton22 border-0 w-100 mt-4"]', 3000);
    });

    var botoesParaClicar = ['button.tf-button'];
    function clicarNosBotoesComAtraso() {
        setTimeout(function() {
            clicarNosBotoes();
        }, 3000);
    }

    function clicarNosBotoes() {
        for (var i = 0; i < botoesParaClicar.length; i++) {
            var botao = document.querySelector(botoesParaClicar[i]);
            if (botao) {
                botao.click();
            }
        }
    }

    function isCaptchaChecked() {
        return grecaptcha && grecaptcha.getResponse();
    }

    var verificarCaptchaInterval = setInterval(function() {
        if (isCaptchaChecked()) {
            clearInterval(verificarCaptchaInterval);
            clicarNosBotoesComAtraso();
        }
    }, 1000);

    var email = "seuemail@gmail.com";
    var senha = "suasenha";

    function preencherCampos() {
        var emailInput = document.querySelector('input#email');
        var senhaInput = document.querySelector('input#password');

        if (emailInput && senhaInput) {
            emailInput.value = email;
            senhaInput.value = senha;
        }
    }

    window.addEventListener('load', preencherCampos);

    if (window.location.href === "https://coinmasters.online/") {
        window.location.href = "https://coinmasters.online/login";
    }

    if (window.location.href === "https://coinmasters.online/dashboard") {
        window.location.href = "https://coinmasters.online/links";
    }

    function removerCartoes() {
        var cartoes = document.querySelectorAll('div[class="col-12 col-md-4"]');
        cartoes.forEach(function(cartao) {
            var textoCartao = cartao.innerText;
            if (textoCartao.includes("RSShort")) {
                cartao.remove();
            }
        });
    }

    function clicarStartLink() {
        var startLinkButton = document.querySelector('p.mb-0.text3[style="font-size:13px;"]');
        if (startLinkButton && startLinkButton.innerText === 'Start Link') {
            startLinkButton.click();
        }
    }

    window.addEventListener('load', function() {
        clicarStartLink();
        setInterval(clicarStartLink, 300000);
    });

    removerCartoes();
})();
