// links embed em imagens e etc
const showEmbedLinks = async (tabs) => {
    let tab = tabs.pop();

    // nao precisa de count pq podemos pegar de outra maneira
    // usando o .numberoflinks
    var embed_number = document.getElementById('embed-number');
    let embed_list = document.getElementById('embed-list');
    
    const message = await browser.tabs.sendMessage(
        tab.id, { 
          method: "embed"
        }
    );
    
    // agora o count nao é um contador, é só uma informação direta
    let embed_count = message.data.numberOfLinks;

    // bloco de criação de html
    let embed_all_title = document.createElement("p");
    let embed_number_total = document.createTextNode("Total embed links: "+embed_count);
    embed_all_title.appendChild(embed_number_total);
    embed_number.appendChild(embed_all_title);
    
    // ao inves de fazer um for como nos cookies e no local storage estou usando o map para arrays
    // porque ele ja vai me dar os links todos
    // https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-pt
    let embed_links = message.data.links;
    embed_links.map(link_name=>{
        // mesma ideia dos cookies, mas sem o for
        let li = document.createElement('li');
        // https://www.w3schools.com/jsref/prop_node_innertext.asp
        li.innerText = link_name;
        embed_list.appendChild(li);
    });
}

// "descobre" qual é a aba aberta a pega algumas de suas infos
function getActiveTab() {
    return browser.tabs.query({
        currentWindow: true, 
        active: true
    });
}
  
// chama a funcao de local storage depois de obter a aba aberta
getActiveTab().then(showEmbedLinks);