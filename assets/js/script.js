const serverBtn = document.getElementById('server-btn');
const rulesBtn = document.getElementById('rules-btn');
const loreBtn = document.getElementById('lore-btn');
const wlBtn = document.getElementById('wl-btn');
const storeBtn = document.getElementById('store-btn');
const patchsBtn = document.getElementById('patchs-btn');
const logo = document.getElementById('logo');


const serverPage = document.getElementById('server-content');
const rulesPage = document.getElementById('rules-content');
const lorePage = document.getElementById('lore-content');
const wlPage = document.getElementById('wl-content');
const storePage = document.getElementById('store-content');
const patchsPage = document.getElementById('patchs-content');


serverBtn.addEventListener('click', function(){showPage(serverPage)});
rulesBtn.addEventListener('click', function(){showPage(rulesPage)});
loreBtn.addEventListener('click', function(){showPage(lorePage)});
wlBtn.addEventListener('click', function(){showPage(wlPage)});
storeBtn.addEventListener('click', function(){showPage(storePage)});
patchsBtn.addEventListener('click', function(){showPage(patchsPage)});
logo.addEventListener('click', hidePages);

function showPage (page){
    hidePages();
    page.classList.toggle('showPage');
}

function hidePages(el){
    document.querySelectorAll('.showPage').forEach(function(el){el.classList.toggle('showPage');});
}










