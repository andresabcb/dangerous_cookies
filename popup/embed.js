// // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// const obtain_all_embed_links = () => {
//     // vai selecionar todos os tipos de arquivo que fazem sentido pegar
//     var allExternalLinks = Array.prototype.map.call(
//       // podem ter links embed aqui
//         document.querySelectorAll(
//         "link, img, video, audio,script, iframe, source, embed"
//       ),
//       (HTMLtag) => { 
//         return HTMLtag.href || HTMLtag.src; 
//       }
//     )
//     const embed_links = {links: allExternalLinks,numberOfLinks: allExternalLinks.length}
//     return embed_links;
// }

// // vai ficar esperando a mensagem de que método estamos chamando
// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   switch (request.method) {
//     // case "sessionStorageData":
//     //   sendResponse({ 
//     //     data: Object.entries(sessionStorage) 
//     //   });
//     //   break;
//     case "localStorageData":
//       sendResponse({ 
//         data: Object.entries(localStorage) 
//       });
//       break;
//     case "thirdPartyDomains":
//       sendResponse({ 
//         data: obtain_all_embed_links() 
//       });
//       break;
//     default:
//       sendResponse({ 
//         data: null 
//       });
//   }
// });