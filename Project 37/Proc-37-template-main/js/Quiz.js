class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    quiz.hide();
    textSize(30);
    
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allContestants){
        if (Contestant === "player" + contestant.index)
          fill("red")
        else
          fill("pink");

        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestantss[plr].distance, 120,display_position)
      }
    }
    if(allContestants !== undefined){
      fill("blue")
      textSize(20)
      text("NOTE:All contestants who answered correctly have their names hilighted in green",130,230)
      
    }
  }

}
