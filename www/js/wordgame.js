var turn;
var score;
var flag=0;
var index,x;
var words=["clinic","render","yummy","indi","xerox","toilet","typist","twist","civic","trust","teapot","throat","erase","cardiac","comic","treat"];
 
function intial()
 { 
 $("#next").css("display","none");
 $("#restart").css("display","none");
	
  if(flag==0)
  {
  turn=3; flag=1; score=0;
  }
  else
  {
   turn=3;
   $("#res").text("");
   $("#suf").val("");
   $("#pref").val("");
  }
  
	index=Math.floor(Math.random() * words.length); 
	$("#score").text("Score is:"+score);
	x=words[index];
	x=x.slice(1,x.length-1);
	$("#word").val(x);
	
 }
 function nextword(){
  words.splice(index,1);
 
  if(words.length==0)
  {
	$("#comp").text("Congratulations, you have completed the Game !"); 
  }
  else {
	intial();
	}
 }
function check()
{ 
 
	 if(turn!=0)
	{	suffix=$("#suf").val();
		suffix=suffix.toLowerCase();
		preffix=$("#pref").val();
		preffix=preffix.toLowerCase();
		y=suffix+x+preffix;
		if(y==words[index])
		{
		score+=turn;
		$("#res").text("Correct Guess ");
		$("#score").text("Score is:"+score);
		$("#next").css("display","inline");
			if(words.length==0)
				{	$("#comp").text("Congratulations, you have completed the Game !"); }
		}
		
		else
		{
			 
			 turn--;
			$("#res").text("Wrong Guess "+turn+" turn left");
			 if(turn==0)
				{
					$("#res").text("You have used all the turns\n Game Over!");
					$("#restart").css("display", "inline");
				}
		}
	}
	else {
		$("#res").text("You have used all the turns\n Game Over!");
		$("#restart").css("display", "inline");
	}
}