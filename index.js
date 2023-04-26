var buttoncolors=["red","blue","green","yellow"];
var game=[];
var user=[];
let num=0;
let start=false;
$(document).keypress(function(){
     if(!start){
          $("#head").text("Level"+num);
          sequence();
          start=true;
     }

});
$(".btn").click(function(){
     var usercolor=$(this).attr("id");
     user.push(usercolor);
     console.log(user);
     sound(usercolor);
     animatepressed(usercolor);
     check(user.length-1);
});
function check(currentlevel){
     if(user[currentlevel] === game[currentlevel]){
          if(user.length === game.length){
               setTimeout(function () {
                    sequence();
               
                  }, 1000);
          }
     }
     else{
          $("body").addClass("game-over");
          setTimeout(function () {
               
               $("body").removeClass("game-over");
           }, 200);
          $("#head").text("Game Over, Press Any Key to Restart");
          startOver();

     }


}

function sequence(){
     user=[];
     num++;
     $("#head").text("Level"+num);
     
    var r = Math.floor(Math.random()*4);
    var color=buttoncolors[r];
    game.push(color);
    r++;
    $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(color);  
    animatepressed(color);           
}
function sound(name){
    var name= new Audio("Sounds/"+name+".mp3");
    name.play();  
}
function animatepressed(buttonselect){
    $("#"+buttonselect).addClass("pressed");
    setTimeout(function () {
         $("#" + buttonselect).removeClass("pressed");
    }, 100);

}
function startOver(){
     num=0;
     game=[];
     start=false;
}





   

 // var audio= new audio('Sounds/'+)
 // audio.play();