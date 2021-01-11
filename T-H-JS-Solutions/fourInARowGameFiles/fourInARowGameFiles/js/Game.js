class Game{
    constructor(){
        this.board = new Board;
        this.players = this.createPlayers();
        this.ready = false;
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
}

