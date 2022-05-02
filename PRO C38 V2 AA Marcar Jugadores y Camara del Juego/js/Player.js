class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.rank = 0;
      this.fuel = 185;
      this.life = 185;
      this.score = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.positionX = width / 2 - 100;
      } else {
        this.positionX = width / 2 + 100;
      }
  
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score,
        life: this.life
      });
    }
   //Aa SA) Crea Módulo para obtener los valores de la DB y tener la distancia de los jugadores para que el otro jugador sepa donde va el competidor.
    getDistance() {

      // Obtiene los valores posición de los jugadores de la DB
      var playerDistanceRef = database._____("players/player" + this.index);
      playerDistanceRef.___("value", data => {
        var data = data.___();
        //Trae a la ventana del juego los valores de la posición en X y Y de cada jugador. 
        this.positionX = data.positionX;
        this.positionY = data.positionY;
      });
    }
  
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
  
    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score
      });
    }
  
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
    }
  }
  