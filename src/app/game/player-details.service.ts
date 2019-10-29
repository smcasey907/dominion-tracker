import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {

  totalVictoryPoints: number;
  totalVillagers: number;
  totalCoffers: number;

  constructor() { }

  setTotalValues() {
    this.totalVictoryPoints = 0;
    this.totalCoffers = 0;
    this.totalVillagers = 0;
  }

  getVictoryPoints() { return this.totalVictoryPoints; }
  getVillagers() { return this.totalVillagers; }
  getCoffers() { return this.totalCoffers; }

  addVictoryPoints(points) { this.totalVictoryPoints += points; }
  addVillagers(villagers) { this.totalVillagers += villagers; }
  addCoffers(coffers) { this.totalCoffers += coffers; }

  setVillagers(villagers) { this.totalVillagers = villagers; }
  setCoffers(coffers) { this.totalCoffers = coffers; }
}
