import { Injectable } from '@angular/core';
import { ICard } from './card';

@Injectable({
  providedIn: 'root'
})
export class GameEffectsService {

  public gameCards = [];
  public gameState = [];

  constructor() { }

  addCardToGame(card) {
    this.gameCards.push(card);
  }

  getGameCards() {
    return this.gameCards;
  }

  setGameState(state) {
    this.gameState = [{
      actions: state.actions,
      buys: state.buys,
      coins: state.coins,
      victory: state.victory,
      coffers: state.coffers,
      villagers: state.villagers
    }];
    console.log(this.gameState);
  }

  getGameState() { return this.gameState; }
}
