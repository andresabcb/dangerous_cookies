// script que vai criar a lista de cookies que tem nessa aba
// vamos pegar aqui todos os cookies e 
const showLocalStorage = async (tabs) => {
  let tab = tabs.pop();

  // criando a lista de elementos, o contador e o numero final
  let localstorage_count = 0;
  var localstorage_number = document.getElementById('localstorage-number');
  let localstorage_list = document.getElementById('localstorage-list');

  const message = await browser.tabs.sendMessage(
    tab.id, { 
      method: "localstorage"
    }
  );

  console.log(message);

  if (message.data.length > 0) {
    for (let item of message.data) {
      if (item) {
        // peguei do exemplo dos cookies
        let li = document.createElement("li");
        let content = document.createTextNode(item);
        li.appendChild(content);
        localstorage_list.appendChild(li);
        localstorage_count += 1;
      }
    }
    let localstorage_all_title = document.createElement("p");
    let localstorage_number_total = document.createTextNode("Total local storage elements: "+localstorage_count);
    localstorage_all_title.appendChild(localstorage_number_total);
    localstorage_number.appendChild(localstorage_all_title);
  }
  else {
    let p = document.createElement("p");
    let content = document.createTextNode("No local storage elements in this tab.");
    let parent = cookieList.parentNode;

    p.appendChild(content);
    parent.appendChild(p);
  }

}

// "descobre" qual é a aba aberta a pega algumas de suas infos
function getActiveTab() {
  return browser.tabs.query({
      currentWindow: true, 
      active: true
  });
}

// chama a funcao de local storage depois de obter a aba aberta
getActiveTab().then(showLocalStorage);