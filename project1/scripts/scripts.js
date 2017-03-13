jQuery(function() {

//Creates field
let body = $('body');
let goalie = $('<div id="goalie"></div>');
let ball = $('<div id="ball"></div>');
let zone1 = $('<div id="zone1" class="zone"></div>')
let zone2 = $('<div id="zone2" class="zone"></div>')
let zone3 = $('<div id="zone3" class="zone"></div>')
let scoreboard = $('<div id="scoreboard"></div>');
body.append(goalie);
body.append(ball);
body.append(zone1);
body.append(zone2);
body.append(zone3);
body.append(scoreboard);
let homeScore = 0;
let awayScore = 0;
let turn =1;


//declares offense and defense values to be assigned later
let shot=0;
let dive=0;

//shooting function
zone1.on("click",function(){
  ball.attr('id','ball1'); //changes ball location
  shot=1; //sets offense value
  oVd(shot,turn) //offense vs. defense, returns if goal or save
  turn++;

});

zone2.on("click",function(){
  ball.attr('id','ball2');
  shot=2;
  oVd(shot,turn);
  turn++;
});

zone3.on("click",function(){
  ball.attr('id','ball3');
  shot=3;
  oVd(shot,turn);
  turn++;
});


function defense()
{
let dive=Math.floor(Math.random()*3)+1; //goalie chooses where to dive

  if (dive===1)
  {
    goalie.attr('id','goalie1') //moves goalie position
  }
  else if (dive===2)
  {
    goalie.attr('id','goalie2')
  }
  else if (dive===3)
  {
    goalie.attr('id','goalie3')
  }

  return dive; //returns defense value
 }

function oVd(shot,turn)
{
  dive=defense(); //defense function, returns defense value
  if(shot!==dive)
  {
    console.log("Goal!");
    if(turn%2===1)
    {
       awayScore++;
    }
    else
    {
      homeScore++;
    }
  }
  else
  {
    console.log("save!");
  }

  setTimeout(fieldReset,1500); //resets board
  let round = Math.ceil(turn/2);
  scoreboard.text("Round: "+round+" Away:"+awayScore+" - Home:"+homeScore);

  if (turn===10)
  {
    if (homeScore>awayScore)
    {
      alert("The home team wins!")
    }
    else if (awayScore>homeScore)
    {
      alert("The away team wins!")
    }
    else
    {
      alert("Its a draw!")
    }
    scoreReset();
  }

}

function fieldReset()
{
  goalie.attr('id','goalie');
  ball.attr('id','ball');
}

function scoreReset()
{
  homeScore=0;
  awayScore=0;
}


})











