import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from '../player-details.service';
import { GameEffectsService } from '../game-effects.service';


@Component({
  selector: 'app-main-phase',
  templateUrl: './main-phase.component.html',
  styleUrls: ['./main-phase.component.scss']
})
export class MainPhaseComponent implements OnInit {

  gameDeck: {};
  actionsRemain: number;
  buysRemain: number;
  coinsRemain: number;
  victoryPoints: number;
  villagers: number;
  coffers: number;

  constructor(
    private gameEffects: GameEffectsService,
    private playerDetails: PlayerDetailsService,
  ) { }

  ngOnInit() {
    this.gameDeck = this.gameEffects.getGameCards();
    this.actionsRemain = 1;
    this.buysRemain = 1;
    this.coinsRemain = 0;
    this.victoryPoints = this.playerDetails.getVictoryPoints();
    this.villagers = this.playerDetails.getVillagers();
    this.coffers = this.playerDetails.getCoffers();
  }

  playThisCard(card) {
    this.actionsRemain--;
    if (card.actions) {
      this.actionsRemain += card.actions;
    }
    if (card.buys) {
      this.buysRemain += card.buys;
    }
    if (card.coins) {
      this.coinsRemain += card.coins;
    }
    if (card.victory) {
      this.victoryPoints += card.victory;
      this.playerDetails.addVictoryPoints(card.victory);
    }
    if (card.villagers) {
      this.villagers += card.villagers;
      this.playerDetails.addVillagers(card.villagers);
    }
    if (card.coffers) {
      this.coffers += card.coffers;
      this.playerDetails.addCoffers(card.coffers);
    }
  }

  playGenericCard() {
    this.actionsRemain--;
  }

  updateState() {
    const newState = {
      actions: this.actionsRemain,
      buys: this.buysRemain,
      coins: this.coinsRemain,
      victory: this.victoryPoints,
      villagers: this.villagers,
      coffers: this.coffers
    };
    this.gameEffects.setGameState(newState);
  }

}
