class MacMenu extends HTMLElement {
  
    constructor(imgs=[]) {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        shadow.appendChild(div);
        div.setAttribute('id','main');
        const ul = document.createElement('ul');
        div.appendChild(ul);

        for (let img of Database.getImgs()){
            let li = document.createElement('li');
            ul.appendChild(li);
            let span = document.createElement('span');
            li.appendChild(span);
            span.textContent = img.title;

            let href = document.createElement('a');
            li.appendChild(href);
            href.setAttribute('href','#');
            let imgDiv = document.createElement('img');
            href.appendChild(imgDiv);
            imgDiv.setAttribute('src',img.src);
        }
            
    }
  }

  class Database {
    static getImgs(){
        return [
            {src:"Mac-Address-Book-icon.png",title:"Address Book"},
            {src:"Mac-App-Store-icon.png",title:"App Store"},
            {src:"chrome_ico.png",title:"Chrome"},
            {src:"firefox.png",title:"Firefox"},
            {src:"Mac-icon.png",title:"Mac"},
            {src:"mac-icon2.png",title:"Icon"},
            {src:"MetroUI-Apps-Mac-iChat-icon.png",title:"Chat"},
            {src:"apple-icon.png",title:"Apple"}
        ]
    }
  }

  customElements.define('mac-menu', MacMenu);