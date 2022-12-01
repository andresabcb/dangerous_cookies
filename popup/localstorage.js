// aqui vamos encontrar as informações de local storage da página acessada

// precisa ser async para conseguirmos usar o await
async function obtain_localstorage_data(tabs) {
    // assim como usamos nos cookies, o tabs.pop vai nos dar a tab desejada
    let tab = tabs.pop();
    let message = await browser.tabs.sendMessage(
        tab.id, {
            method: "localstorage",
        }
    );
        
    // assim como usei nos cookies para enviar a informação para o html
    let localstorage_info = document.getElementById("localstorage");
    let localstorage_title = document.createElement("p");
    let localstoragetxt = document.createTextNode("Total local storage: "+message.data.length);
    localstorage_title.appendChild(localstoragetxt);
    localstorage_info.appendChild(localstorage_title);
}

// "descobre" qual é a aba aberta a pega algumas de suas infos
function getActiveTab() {
    return browser.tabs.query({
        currentWindow: true, 
        active: true
    });
}

// chama a funcao de local storage depois de obter a aba aberta
getActiveTab().then(obtain_localstorage_data);