class Token{
    constructor(index, owner){
        this.owner = owner;
        this.id =  `token-${index}-${owner.id}`;
        this.dropped = false;

    }

    /** 
     * Gets associated htmlToken.
     * @return  {element}   Html element associated with token object.
     */
    get htmlToken(){
        return this.token;
    }

    /**
     * Draws new HTML token.
     */
    drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}
















    //og solution 
    // drawHTMLToken(){
    //     const token = document.createElement('div');
    //     document.getElementsById('game-board-underlay').appendChild(token);
    //     token.setAttribute('id', 'token-${index}-${owner.id}');
    //     token.setAttribute('class', 'token');
    //     token.style.backgroundColor(this.owner.backgroundColor);
    // }