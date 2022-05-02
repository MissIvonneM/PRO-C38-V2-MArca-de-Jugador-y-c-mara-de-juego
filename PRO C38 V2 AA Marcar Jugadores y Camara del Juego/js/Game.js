class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  
      car1 = createSprite(width / 2 - 50, height - 100);
      car1.addImage("car1", car1_img);
      car1.scale = 0.07;
  
      car2 = createSprite(width / 2 + 100, height - 100);
      car2.addImage("car2", car2_img);
      car2.scale = 0.07;
  
      cars = [car1, car2];
    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
    }
  
    play() {
      this.handleElements();
  
      Player.getPlayersInfo();
  
      if (allPlayers !== undefined) {
        image(track, 0, -height * 5, width, height * 6);
  
        //índice de la matriz
        var index = 0;
        for (var plr in allPlayers) {
          //agrega 1 al índice para cada bucle
          index = index + 1;
  
          //utilizar datos de la base de datos para mostrar los autos en las direcciones x e y
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          cars[index - 1].position.x = x;
          cars[index - 1].position.y = y;
     

          
          if (index === player.index) {
            //Ca SA) Dibuja un pequeño círculo debajo del auto del jugador activo   
            stroke(10);
            
            

  
            //Da Sa) Alinea la posición de la cámara con la posición del auto activo
            


          }
        }
        this.handlePlayerControls();
  
        drawSprites();
      }
    }
  
    handlePlayerControls() {
      // manejando eventos de teclado
      


      }
    }
  
  