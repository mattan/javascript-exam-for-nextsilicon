// NOTE: this file must be include with defer to use the inner HTML

/*export*/ class FanAnimation {
  
    static add(MainDiv,n=3){
        if (n==0 || n==null) return;
        const div = document.createElement('div');
        div.setAttribute('class','fan');
        MainDiv.appendChild(div);
        this.add(div,n-1);
    }

    static getStyle(){
        let style = document.createElement('style');

        style.textContent = `
            .fan{
                position: absolute;
                width:300px;
                height:50px;
                transition: all 0.3s;
                background: transparent;
                
            }
            li:hover .fan{
                z-index: -1;
                background:grey;
                transform:rotate(10deg) translate(0px,-100px);
            }
        
        `
        return style;
    }

  }