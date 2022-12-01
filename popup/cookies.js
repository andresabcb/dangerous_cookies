// script que vai criar a lista de cookies que tem nessa aba
// vamos pegar aqui todos os cookies e 
function showCookiesForTab(tabs) {
  let tab = tabs.pop();
  let gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    let activeTabUrl = document.getElementById('header-title');
    let text = document.createTextNode("Cookies at: "+tab.title);
    let cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    // configurando para conntar a quantidade
    let cookie_count = 0;
    let cookies_number =  document.getElementById('cookies-number');

    // separar em first e third party
    let firstparty_count = 0;
    let thirdparty_count = 0;

    // listas que vao armazenar os cookies de first e third party
    let firstparty_list = document.getElementById('first-party-list');
    let thirdparty_list = document.getElementById('third-party-list');

    // // aqui vao os titulos das separacoes no html
    // let activeTabUrl = document.getElementById('header-title');

    let text_fp = document.createTextNode("First party cookies: ");
    firstparty_list.appendChild(text_fp);

    let text_tp = document.createTextNode("Third party cookies: ");
    thirdparty_list.appendChild(text_tp);
    
    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        let li = document.createElement("li");
        let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        li.appendChild(content);
        cookieList.appendChild(li);

        // separando os de first e de third party
        if (tab.url.includes(cookie.domain)){
          firstparty_count++;
          firstparty_list.appendChild(li);
        }
        else {
          thirdparty_count++;
          thirdparty_list.appendChild(li);
        }

        // // separando os de session e navigation
        // if (cookie.session != undefined){
        //   sessionAmount++;
        //   //firstparty_list.appendChild(li);
        // }
        // else {
        //   navigationAmount++;
        //   //thirdparty_list.appendChild(li);
        // }

        cookie_count += 1;
      }
      cookies_number.appendChild(cookie_count);
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No cookies in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
  });
}

// pega uma aba ativa
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab);