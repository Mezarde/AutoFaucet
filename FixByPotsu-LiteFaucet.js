// ==UserScript==
// @name         Lite Faucet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autologin e Autoshorts!
// @author       Potsu
// @match        https://litefaucet.in/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=litefaucet.in
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const intervalo = 300000;

    function clicarEmClaim() {
        var botaoClaim = document.querySelector('.btn.btn-primary.waves-effect.waves-light');
        if (botaoClaim) {
            console.log("Clicando em:", botaoClaim.textContent);
            botaoClaim.click();
        } else {
            console.warn("Botão 'Claim' não encontrado ou não disponível.");
        }
    }

    window.addEventListener('load', clicarEmClaim);

    setInterval(clicarEmClaim, intervalo);

    const email = "EMAILAQUI@gmail.com";
    const password = "SENHA-AQUI";

    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');

    if (emailField && passwordField) {
        emailField.value = email;
        passwordField.value = password;
    } else {
        console.warn("Campos de email e/ou senha não encontrados");
    }

    if (window.location.href === "https://litefaucet.in/") {
        window.location.href = "https://litefaucet.in/login";
    } else if (window.location.href === "https://litefaucet.in/login") {
        window.location.href = "https://litefaucet.in/dashboard";
    }

    function removerCartoes() {
        var linksIndesejados = ["Clks.pro", "rss", "Clk.sh", "Shrinkearn", "Shrink.me"];
        var cartoes = document.querySelectorAll('div.col-lg-3');
        cartoes.forEach(cartao => {
            var link = cartao.innerText;
            if (linksIndesejados.some(indesejado => link.includes(indesejado))) {
                cartao.remove();
            }
        });
    }

    removerCartoes();

    var linkGithub = document.createElement('a');
    linkGithub.href = 'https://github.com/potisu';
    linkGithub.textContent = 'Github';
    linkGithub.target = '_blank';
    linkGithub.style.position = 'fixed';
    linkGithub.style.bottom = '20px';
    linkGithub.style.right = '10px';
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
    messageDiv.style.left = '10px';
    messageDiv.style.padding = '10px';
    messageDiv.style.backgroundColor = 'black';
    messageDiv.style.color = 'green';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '9999';
    messageDiv.textContent = 'By Potsu';
    document.body.appendChild(messageDiv);
})();
