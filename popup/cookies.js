// script que vai criar a lista de cookies que tem nessa aba
// vamos pegar aqui todos os cookies e 
function showCookiesForTab(tabs) {
  let tab = tabs.pop();
  let gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    let activeTabUrl = document.getElementById('header-title');
    let text = document.createTextNode(tab.title);
    let cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    // configurando para conntar a quantidade
    let cookie_count = 0;
    var cookies_number = document.getElementById('cookie-number');

    // separar em first e third party
    let firstparty_count = 0;
    let thirdparty_count = 0;
    // let fp_number =  document.getElementById('fistparty-number');
    // let tp_number =  document.getElementById('thirdparty-number');

    // listas que vao armazenar os cookies de first e third party
    let firstparty_list = document.getElementById('first-party-list');
    let thirdparty_list = document.getElementById('third-party-list');

    // separar em session e navigation party
    let session_count = 0;
    let navigation_count = 0;
    let session_number =  document.getElementById('session-number');
    let navigation_number =  document.getElementById('navigation-number');
    
    if (cookies.length > 0) {
      //vai add um elemento de lista <li> com o nome e o valor do cookie
      for (let cookie of cookies) {
        let li = document.createElement("li");
        let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        li.appendChild(content);
        cookieList.appendChild(li);
        cookie_count += 1;

        // separando os de first e de third party
        if (tab.url.includes(cookie.domain)){
          firstparty_count += 1;
          firstparty_list.appendChild(li);
        }
        else {
          thirdparty_count += 1;
          thirdparty_list.appendChild(li);
        }

        if (cookie.session != undefined){
          session_count += 1;
        }
        else {
          navigation_count += 1;
        }

      }

      // total count
      let cookies_all_title = document.createElement("p");
      let cookies_number_total = document.createTextNode("Total cookies: "+cookie_count);
      cookies_all_title.appendChild(cookies_number_total);
      cookies_number.appendChild(cookies_all_title);

      // // third party count
      // let cookies_thirdparty_title = document.createElement("p");
      // let cookies_number_tp = document.createTextNode("Total third party cookies: "+thirdparty_count+"/"+cookie_count);
      // cookies_thirdparty_title.appendChild(cookies_number_tp);
      // tp_number.appendChild(cookies_thirdparty_title);

      // // first party count
      // let cookies_firstparty_title = document.createElement("p");
      // let cookies_number_fp = document.createTextNode("Total first party cookies: "+firstparty_count+"/"+cookie_count);
      // cookies_firstparty_title.appendChild(cookies_number_fp);
      // fp_number.appendChild(cookies_firstparty_title);

      // session count
      let cookies_session_title = document.createElement("p");
      let cookies_number_session = document.createTextNode("Total session cookies: "+session_count+"/"+cookie_count);
      cookies_session_title.appendChild(cookies_number_session);
      session_number.appendChild(cookies_session_title);

      // navigation count
      let cookies_navigation_title = document.createElement("p");
      let cookies_number_navigation = document.createTextNode("Total navigation cookies: "+navigation_count+"/"+cookie_count);
      cookies_navigation_title.appendChild(cookies_number_navigation);
      navigation_number.appendChild(cookies_navigation_title);

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