// https://www.devmedia.com.br/javascript-switch/39761
// https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
// vai ficar esperando a mensagem de que método estamos chamando
// se o localstorage for chamado, ele vai agir
// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   switch (request.method) {
//     case "localStorage":
//       sendResponse({ 
//         data: Object.entries(localstorage) 
//       });
//       break;
//     default:
//       sendResponse({ 
//         data: null 
//       });
//   }
// });
  
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //console.log(request.method);
      if (request.method == "localstorage"){
        sendResponse({ 
          data: Object.entries(localStorage) 
        });
      }
    }
  );