var scores,roundscore,activeplayer,dice,gameplaying;
init();

document.querySelector('.button-roll').addEventListener('click', function (){
	if(gameplaying){

	 //generate a random numbers
	 var dice= Math.floor(Math.random() * 6) + 1;
	
	 //displaying the result
		 var diceDOM=document.querySelector('.dice');
		 diceDOM.style.display='block';
	  diceDOM.src = 'dice-' + dice + '.png'; // to display the image of dice with corresponding dice number
	  
	  //update the round score if it is not 1
	  if(dice!=1){
		  //add score
		  roundscore +=dice;
		  document.querySelector('#current-' + activeplayer).textContent = roundscore; 
	  }else{//next player
	 nextplayer();//DRY principle
	  }

	}

	
});

// hold button

document.querySelector('.button-hold').addEventListener('click', function(){
	if (gameplaying){

	//add current score to global score
	scores[	activeplayer] += roundscore;
	//upadte ui
	document.querySelector('#score-' + activeplayer).textContent= scores[activeplayer];
					  
	//check  if player won the game
	if(scores[activeplayer] >= 100){
	document.querySelector('#name-' + activeplayer).textContent='Winner!';
	document.querySelector('.dice').style.display ='none';
	document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
	document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
	gameplaying = false;
	}	
		else {
			nextplayer();
		}
	}

});

function nextplayer(){

	  activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
	  roundscore=0;
	  document.querySelector('#current-0').textContent = '0';
	   document.querySelector('#current-1').textContent = '0';	
	 document.querySelector('.player-0-panel').classList.toggle('active');
	 document.querySelector('.player-1-panel').classList.toggle('active');
	 document.querySelector('.dice').style.display='none'; //not to display dice=1
}

document.querySelector('.button-new').addEventListener('click',init);

function init(){
scores=[0,0];
roundscore=0;
activeplayer=0;
gameplaying = true;


//dice= Math.floor(Math.random() * 6) + 1; //for generating random numbers
//console.log (dice);
//document.querySelector('#current-' + activeplayer).textContent = dice;  // to change the elements of the webpage.

//git commands
document.querySelector('.dice').style.display='none';    //to hide the dice(also can be used in the form of css)

document.querySelector('#score-0').textContent='0';     //for setting default value i.e 0
document.querySelector('#score-1').textContent='0';    
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
//document.querySelector('.player-0 -panel').classList.add('active');
//document.querySelector('.player-1-panel').classList.remove('active');
//document.querySelector('.player-0 -panel').classList.remove('active');
}

