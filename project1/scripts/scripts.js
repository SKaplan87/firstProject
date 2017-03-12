jQuery(function() {

//Creates field
let body = $('body');
let goalie = $('<div id="goalie"></div>');
let ball = $('<div id="ball"></div>');
let zone1 = $('<div id="zone1" class="zone">ZONE 1</div>')
let zone2 = $('<div id="zone2" class="zone">ZONE 2</div>')
let zone3 = $('<div id="zone3" class="zone">ZONE 3</div>')
body.append(goalie);
body.append(ball);
body.append(zone1);
body.append(zone2);
body.append(zone3);
let homeScore = 0;
let awayScore = 0;
let turn =1;

// let scoreboard = $('<container id="scoreboard></container');
// let home1 =$('div class="round", id="home1"></div>');
// let home2 =$('div class="round", id="home2"></div>');
// let home3 =$('div class="round", id="home3"></div>');
// let home4 =$('div class="round", id="home4"></div>');
// let home5 =$('div class="round", id="home5"></div>');
// let homeTot=$('div class="round", id="homeTot"></div>');
// let away1 =$('div class="round", id="away1"></div>');
// let away2 =$('div class="round", id="away2"></div>');
// let away3 =$('div class="round", id="away3"></div>');
// let away4 =$('div class="round", id="away4"></div>');
// let away5 =$('div class="round", id="away5"></div>');
// let awayTot =$('div class="round", id="awayTot"></div>');


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
console.log("dive to "+dive) //will delete, for testing

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
  console.log("dive to "+dive);
  if(shot!==dive)
  {
    console.log("Goal!");
    if(turn%2=1)
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
  setTimeout(reset,2000); //resets board
  alert(awayScore+" - "+homeScore);
}

function reset()
{
  goalie.attr('id','goalie');
  ball.attr('id','ball');
}


})











