import { Component, OnInit } from '@angular/core';
import { GameEffectsService } from '../game-effects.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayerDetailsService } from '../player-details.service';

@Component({
  selector: 'app-buy-phase',
  templateUrl: './buy-phase.component.html',
  styleUrls: ['./buy-phase.component.scss']
})
export class BuyPhaseComponent implements OnInit {

  buysRemain: number;
  coinsRemain: number;
  coffersRemain: number;

  gameState = [];

  constructor(
    private gameEffects: GameEffectsService,
    private playerDetails: PlayerDetailsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.gameState = this.gameEffects.getGameState();
    this.buysRemain = this.gameState[0].buys;
    this.coinsRemain = this.gameState[0].coins;
    this.coffersRemain = this.gameState[0].coffers;
  }

  nextTurn() {
    this.buysRemain = 0;
    this.coinsRemain = 0;
    this.playerDetails.setCoffers(this.coffersRemain);
  }

  addCopper() { this.coinsRemain += 1; }
  addSilver() { this.coinsRemain += 2; }
  addGold() { this.coinsRemain += 3; }
  addPlatinum() { this.coinsRemain += 5; }

  payAmount(cost) {
    if (cost > this.coinsRemain) {
      if (cost > this.coinsRemain + this.coffersRemain ) {
        this.snackBar.open('You do not have enough for this purchase');
        return;
      }
      this.buysRemain--;
      let getFromCoffers = 0;
      getFromCoffers = cost - this.coinsRemain;
      this.coffersRemain = this.coffersRemain - getFromCoffers;
      this.coinsRemain = 0;
    } else {
      this.buysRemain--;
      this.coinsRemain = this.coinsRemain - cost;
    }
  }

}
