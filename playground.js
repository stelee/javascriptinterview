var Redux = require('redux');
var jquery = require('jquery');
var cardModule = require('./Card');
function cardsDeckOperator(state, action){
  if(typeof state === 'undefined'){
    return [null, new cardModule.CardsDeck()]
  }
  switch(action.type){
    case 'shuffle':
      state[1].shuffle();
      return state;
    case 'dealOneCard':
      return [state[1].dealOneCard(), state[1]];
    case 'reload':
      return [null, new cardModule.CardsDeck()];
    default:
      return state;
  }
}

var store = Redux.createStore(cardsDeckOperator);
var valueEl = null;

function showResult(){
  var [card, cardsDeck] =  store.getState();
  if(card == null && cardsDeck.hasCardLeft()){
    valueEl.text('Not start to deal one card yet, have you shuffled the cards?');
  }else if(card == null && !cardsDeck.hasCardLeft()){
    valueEl.text('You have no cards left, please click reload and then click shuffle');
  }else{
    valueEl.text(`You have dealt with card: ${card.toString()}`)
  }
}

store.subscribe(showResult);

jquery().ready(function(){
  valueEl = jquery('#result');
  showResult();
  jquery('#reloadBtn').on('click', function(){
    store.dispatch({type:'reload'})
  });
  jquery('#shuffleBtn').on('click', function(){
    store.dispatch({type:'shuffle'})
  });
  jquery('#dealOneCardBtn').on('click', function(){
    store.dispatch({type:'dealOneCard'})
  });
})
