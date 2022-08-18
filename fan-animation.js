// NOTE: this file must be include with defer to use the inner HTML

/*export*/ class FanAnimation {
  
    static add(MainDiv,imgs=[]){
        if (imgs.length == 0) return;
        for (let [i,img] of imgs.entries()){
            let div = document.createElement('div');
            div.setAttribute('class','fan');
            div.setAttribute('style',`transform: rotate(${i*5}deg) translate(-${i*30+200}px,-${i*50+200}px)`);
            this.#addImg(div,img);
            MainDiv.appendChild(div);
        }
    }

    static #addImg(rootDiv,img){
        let imgDiv = document.createElement('img');
        imgDiv.setAttribute('src',img.src);
        imgDiv.setAttribute('style',`transform: scale(1);margin: 0 0 0 30px; `);
        rootDiv.textContent = img.title;
        rootDiv.appendChild(imgDiv);
        
    }


    static getStyle(){
        let style = document.createElement('style');

        style.textContent = `
            .fan{
                visibility: hidden;
                position: absolute;
                width:300px;
                height:64px;
                transition: all 0.3s;
                background:grey;

                display: flex;
                /*flex-direction: row-reverse;*/
                justify-content: flex-end;
                font-size: 50px;
                white-space: nowrap;
                
            }
            li:hover .fan{
                visibility: visible;
                z-index: -1;
                
            }
        
        `
        return style;
    }

  }