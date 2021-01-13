class Game{
    constructor(){
        this.board = new Board;
        this.players = this.createPlayers();
        this.ready = false;
    }
    

    /** 
     * Returns active player
     * @return  {Object} player - The active player.
     */
    get activePlayer(){
        return this.players.find(player => player.active)
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers(){
            const players = [new Player('Player1', 1, '#e15258', true),
                             new Player('Player2', 2, 'e#59a13')];
       
        return players;
    }

    /*
    * Begins Game
    */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */
    handleKeydown(keydown){
        if(Game.ready === true){
            if(e.key === "ArrowRight"){
                //Move right
            } else if (e.key === "ArrowLeft") {
                //Move left
            } else if (e.key === "ArrowDown"){
                //Play Tokent
            }
        }   
    }
}










//OG solution

// activePlayers(){
//     return this.players.active = true;
// }