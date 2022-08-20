// NOTE: this file must be include with defer to use the inner HTML

/*export*/ class FanAnimation {
  
    static add(MainDiv,imgs=[]){
        if (imgs.length == 0) return;
        for (let [i,img] of imgs.entries()){
            let div = document.createElement('div');
            div.setAttribute('class','fan');
            div.setAttribute('style',`transform: rotate(0deg) translate(-200px,-100px)`);
            FanAnimation.#addImg(div,img);
            MainDiv.appendChild(div);
        }
    }

    static open(MainDiv){
        if (MainDiv.hasAttribute('isOpen')){
            for (let [i,div] of [...MainDiv.children].slice(2).entries()){
                div.setAttribute('style',`transform: rotate(0deg) translate(-200px,-100px);visibility: hidden;`);
            }
            MainDiv.removeAttribute('isOpen');
        }
        else{
            for (let [i,div] of [...MainDiv.children].slice(2).entries()){
                div.setAttribute('style',`transform: rotate(${i*3}deg) translate(-${i*20+200}px,-${i*75+200}px);visibility: visible;`);
            }
            MainDiv.setAttribute('isOpen','');
        }

    }

    static #addImg(rootDiv,img){
        let imgDiv = document.createElement('img');
        imgDiv.setAttribute('src',img.src);
        imgDiv.setAttribute('style',`transform: scale(1);margin: 0 0 0 25px; `);
        
        let txtDiv = document.createElement('div');
        txtDiv.textContent = img.title;
        rootDiv.appendChild(txtDiv);
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

                display: flex;
                /*flex-direction: row-reverse;*/
                justify-content: flex-end;
                font-size: 20px;
                white-space: nowrap;
                align-items: center;
                
            }
            .fan div{
                padding: 5px;
                height: 25px;
                background:grey;
                border-radius: 25%;
            }
            li:hover .fan{
                
                z-index: -1;
                
            }
        
        `
        return style;
    }

  }