var scores, roundScores, activeplayer, gamePlaying,previousDice;

init();
document.querySelector('.btn--roll').addEventListener('click' , function(){
  if(gamePlaying){
    //random number
    var dice = Math.floor(Math.random()*6) + 1 ;

    //document.querySelector('#current--' + activeplayer).textContent= dice;
    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display= 'block';
    diceDOM.src= 'dice-' + dice + '.png' ;
    //update the round scores
    if(dice !==1){
      roundScores+= dice;
      document.querySelector('#current--' + activeplayer).textContent= roundScores ;
    }
    else{
      nextplayer();
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click' , function(){
  if(gamePlaying){
    scores[activeplayer] += roundScores;
    document.querySelector('#score--' + activeplayer).textContent= scores[activeplayer] ;
    //checl winner
    winner();
  }
});

document.querySelector('.btn--new').addEventListener('click' , init);

function init(){
  scores=[0,0];
  roundScores = 0;
  activeplayer = 0;
  gamePlaying= true;
  document.querySelector('.dice').style.display= 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent= 'player 1';
  document.getElementById('name--1').textContent= 'player 2';
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');

}

function nextplayer(){
  activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
  roundScores = 0 ;
  document.querySelector('#current--0').textContent= 0;
  document.querySelector('#current--1').textContent= 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
//  document.querySelector('.dice').style.display= 'none' ;
}

function winner(){
  if(scores[activeplayer] >= 20){
    document.querySelector('#name--' + activeplayer).textContent= 'Winner' ;
    document.querySelector('.dice').style.display= 'none' ;
    gamePlaying = false;
  }
  else{
    nextplayer();
  }
}
