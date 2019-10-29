import { Component, OnInit, Inject } from '@angular/core';
import { ICard } from '../card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { GameEffectsService } from '../game-effects.service';
import { PlayerDetailsService } from '../player-details.service';

@Component({
  selector: 'app-game-generation',
  templateUrl: './game-generation.component.html',
  styleUrls: ['./game-generation.component.scss']
})
export class GameGenerationComponent implements OnInit {

  gameCards: ICard[] = [];
  name: string;

  constructor(
    public dialog: MatDialog,

    private gameEffects: GameEffectsService,
    private playerDetails: PlayerDetailsService,
  ) { }

  ngOnInit() {
    this.gameCards = [];
    this.playerDetails.setTotalValues();
  }

  createCard() {
    // const config = new MatDialogConfig();
    const dialogRef: MatDialogRef<CardCreationDialogComponent> = this.dialog.open(CardCreationDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.gameEffects.addCardToGame(result);
      console.log(this.gameEffects.gameCards);
    });
  }

  generateGenericCardSet() {
    this.gameEffects.addCardToGame({
      actions: 2,
      buys: 1,
      coins: 2,
      cost: 6,
      name: 'Grand Market'
    });
    this.gameEffects.addCardToGame({
      actions: 1,
      cost: 5,
      name: 'Laboratory'
    });
    this.gameEffects.addCardToGame({
      buys: 1,
      coin: 2,
      cost: 3,
      name: 'Woodcutter'
    });
    this.gameEffects.addCardToGame({
      coin: 2,
      cost: 4,
      villagers: 1,
      name: 'Patron'
    });
    this.gameEffects.addCardToGame({
      cost: 5,
      coffers: 2,
      name: 'Villian'
    });
    this.gameEffects.addCardToGame({
      cost: 4,
      coin: 2,
      victory: 2,
      name: 'Monument'
    });
  }


}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-creation-dialog',
  template: `
    <h1 mat-dialog-title>Create a card</h1>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput [(ngModel)]='data.name' placeholder='Card Name'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.cost' placeholder='Card Cost'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.debt' placeholder='Debt'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.actions' placeholder='Actions Given'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.buys' placeholder='Buys Given'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.coins' placeholder='Coins Given'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.victory' placeholder='Victory Points'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.villagers' placeholder='Villagers Added'>
        </mat-form-field>
    </div>
    <div mat-dialog-content>
        <mat-form-field>
          <input matInput type='number' [(ngModel)]='data.coffers' placeholder='Cofferes Added'>
        </mat-form-field>
    </div>
    <button mat-raised-button color="primary" (click)="dialogRef.close(data)">OK</button>
  `
})

export class CardCreationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CardCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICard
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
