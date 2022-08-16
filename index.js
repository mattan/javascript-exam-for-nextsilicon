// NOTE: this file must be include with defer to use the inner HTML

//import {FanAnimation} from './fan-animation.js';

class MacMenu extends HTMLElement {
  
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.#getStyle());
        shadow.appendChild(FanAnimation.getStyle());
        const div = document.createElement('div');
        shadow.appendChild(div);
        div.setAttribute('id','main');
        const ul = document.createElement('ul');
        div.appendChild(ul);

        for (let macIconDiv of this.children){
            this.#addImg(ul,this.#divToImg(macIconDiv));
        }
            
    }

    #addImg(rootDiv,img){
        let li = document.createElement('li');
        rootDiv.appendChild(li);
        let span = document.createElement('span');
        li.appendChild(span);
        span.textContent = img.title;

        let href = document.createElement('a');
        li.appendChild(href);
        FanAnimation.add(li,img.n);
        href.setAttribute('href','#');
        let imgDiv = document.createElement('img');
        href.appendChild(imgDiv);
        imgDiv.setAttribute('src',img.src);
    }

    #divToImg(macIconDiv){
        return {
            src:macIconDiv.getAttribute("src"),
            title:macIconDiv.innerText,
            n:macIconDiv.getAttribute("fan-n")
        }
    }

    #getStyle(){
        let style = document.createElement('style');

        style.textContent = `
            body { font-family:arial; margin: 0; background: #052325; }


            .wrapper {
                width: 100%;
                background-size: 100%;
                padding: 0 !important;
            }
            p { color: #fff;}
            
            ul {
                padding: 0;
            }
            
            
            #main {
                position: fixed;
                bottom: 0;
                text-align: center;
                right: 20%;
                left: 20%;
                width: 60%;
                background: rgba(255,255,255,0.2);
                border-radius: 10px 10px 0 0;
            }
            #main li {
                list-style-type: none;
                display: inline-block;
                position: relative;
            }
            
            #main li img {
            width: 64px;
            height: 64px;
            transition: all 0.3s;
            ransform-origin: 50% 100%;
            }
            #main li:hover img { 
            transform: scale(2);
            margin: 0 2em;
            }
            #main li:hover + li img,
            #main li.prev img {
            transform: scale(1.5);
            margin: 0 1.5em;
            }
            
            #main li span {
                white-space: nowrap;
                display: none;
                position: absolute;
                bottom: 140px;
                left: 0;
                width: 100%;
                background-color: rgba(0,0,0,0.75);
                padding: 4px 0;
                border-radius: 12px;
            }
            #main li:hover span {
                display: block;
                color: #fff;
            }
        `
        return style;
    }

  }

  customElements.define('mac-menu', MacMenu);
