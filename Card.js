class Card {
  constructor(faceValue, suit){
    if(faceValue < 1 || faceValue > 13){
      throw new Error('wrong parameter, card face value should be in range of 1 to 13')
    }

    if(suit > 3 || suit < 0){
      throw new Error('wrong parameter, value should be in range of 0 to 3')
    }

    this.faceValue = faceValue;
    this.suit = suit;
  }
  getCardFaceValue(){
    return ['Ace', 'Two',
              'Three','Four','Five','Six','Seven','Eight',
              'Nine','Ten','Jack','Queen','King'][this.faceValue-1];
  }

  getSuitValue(){
    return ['hearts', 'spaders', 'clubs', 'diamonds'][this.suit];
  }

  toString(){
    return `|   ${this.getCardFaceValue()}  | ${this.getSuitValue()}`
  }
}

class CardsDeck {
  constructor(){// always to contruct a new deck of cards
    const faceValueLength = 14;
    this.deckOfCards = [];
    for(let i = 1; i < faceValueLength; i ++){
      for(let j = 0; j< 4; j++){
        this.deckOfCards.push(new Card(i,j));
      }
    }
  }
  shuffle(){
    let remainingLength = this.deckOfCards.length;
    while(remainingLength){
      var randomIndex =  Math.floor(Math.random() * remainingLength--);
      [this.deckOfCards[remainingLength], this.deckOfCards[randomIndex]] =
        [this.deckOfCards[randomIndex], this.deckOfCards[remainingLength]]
    }
  }
  dealOneCard(){
    return this.deckOfCards.shift();
  }
  hasCardLeft(){
    return this.deckOfCards.length > 0;
  }
}

module.exports = {
  Card: Card,
  CardsDeck: CardsDeck
}
