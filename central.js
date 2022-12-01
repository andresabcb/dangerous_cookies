// https://www.devmedia.com.br/javascript-switch/39761
// https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// vai ficar esperando a mensagem de que método estamos chamando
// se o localstorage for chamado, ele vai agir
const getAllExternalLinks = () => {

  var allExternalLinks = Array.prototype.map.call(
    document.querySelectorAll("link, img, video, audio,script, iframe, source, embed"),
    (HTMLtag) => { return HTMLtag.href || HTMLtag.src; })

  const data = {
    links: allExternalLinks,
    numberOfLinks: allExternalLinks.length
  }
  return data;
} 
  
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //console.log("entrou em browser");
      if (request.method == "localstorage"){
        sendResponse({ 
          data: Object.entries(localStorage) 
        });
      }
      else if (request.method == "embed"){
        //console.log("entrou em embed");
        sendResponse({ 
          data: getAllExternalLinks()
        });
      }
    }
);