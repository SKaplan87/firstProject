console.log("JS CONNECTED");

jQuery(function() {

let body = $('body');
let goalie = $('<div id="goalie"></div>');
let ball = $('<div id="ball"></div>');
let zone1 = $('<div id="zone1" class="zone">ZONE 1</div>')
let zone2 = $('<div id="zone2" class="zone">ZONE 2</div>')
let zone3 = $('<div id="zone3" class="zone">ZONE 3</div>')
let zone4 = $('<div id="zone4" class="zone">ZONE 4</div>')
let zone5 = $('<div id="zone5" class="zone">ZONE 5</div>')
let zone6 = $('<div id="zone6" class="zone">ZONE 6</div>')
let zone7 = $('<div id="zone7" class="zone">ZONE 7</div>')
let zone8 = $('<div id="zone8" class="zone">ZONE 8</div>')
let zone9 = $('<div id="zone9" class="zone">ZONE 9</div>')

body.append(goalie);
body.append(ball);
body.append(zone1);
body.append(zone2);
body.append(zone3);
body.append(zone4);
body.append(zone5);
body.append(zone6);
body.append(zone7);
body.append(zone8);
body.append(zone9);

zone1.on("click",function(){
  ball.css({'top':'140px',
              'left':'363px'});
  defense();
});

zone2.on("click",function(){
  ball.css({'top':'140px',
              'left':'600px'});
  defense();
});

zone3.on("click",function(){
  ball.css({'top':'140px',
              'left':'1000'});
  defense();
});

zone4.on("click",function(){
  ball.css({'top':'200px',
              'left':'363px'});
  defense();
});

zone5.on("click",function(){
  ball.css({'top':'200px',
              'left':'600px'});
  defense();
});

zone6.on("click",function(){
  ball.css({'top':'200px',
              'left':'363px'});
  defense();
});

zone7.on("click",function(){
  ball.css({'top':'300px',
              'left':'363px'});
  defense();
});

zone8.on("click",function(){
  ball.css({'top':'300px',
              'left':'600px'});
  defense();
});

zone9.on("click",function(){
  ball.css({'top':'300px',
              'left':'1400'});
  defense();
});

function defense()
{
let dive=Math.floor(Math.random()*8)+1;

  if (dive===1)
  {
    goalie.attr('id','goalieLeftUp')
  }
  else if (dive===2)
  {
    goalie.attr('id','goalieUp')
  }
  else if (dive===3)
  {
    goalie.attr('id','goalieLRightUp')
  }
  else if (dive===4)
  {
    goalie.attr('id','goalieLeftUp')
  }
  else if (dive===5)
  {
    goalie.attr('id','goalieMid')
  }
  else if (dive===6)
  {
    goalie.attr('id','goalieRight')
  }
  else if (dive===7)
  {
    goalie.attr('id','goalieLeftDown')
  }
  else if (dive===8)
  {
    goalie.attr('id','goalieDown')
  }
  else if (dive===9)
  {
    goalie.attr('id','goalieRight')
  }
  return drive;
 }



})











