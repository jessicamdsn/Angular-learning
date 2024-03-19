class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute('conteudo');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(conteudo);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card_right");
        const image = document.createElement('img');
        image.src = this.getAttribute("photo") || "/assets/default-photo.jpg";

        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .card{
            width: 80%;
            border: 1px solid gray;
            box-shadow: 10px 9px 17px -6px rgba(0,0,0,0.88);
        -webkit-box-shadow: 10px 9px 17px -6px rgba(0,0,0,0.88);
        -moz-box-shadow: 10px 9px 17px -6px rgba(0,0,0,0.88);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > a {
            color: black;
            text-decoration: none;
            margin-top: 15px;
            font-size: 25px;
            font-weight: bold;
        }
        
        .card_left > p {
            color: gray;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_right > img {
            width: 200px;
        }
        
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);