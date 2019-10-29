import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

// ANGULAR MATERIAL ELEMENTS
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// Custom Components
import { BuyPhaseComponent } from './game/buy-phase/buy-phase.component';
import { MainPhaseComponent } from './game/main-phase/main-phase.component';
import { GameGenerationComponent, CardCreationDialogComponent } from './game/game-generation/game-generation.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'game-generation', component: GameGenerationComponent },
  { path: 'buy-phase', component: BuyPhaseComponent },
  { path: 'main-phase', component: MainPhaseComponent },
  { path: 'dominion-tracker', component: HomeComponent },
  { path: '', redirectTo: '/dominion-tracker', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BuyPhaseComponent,
    MainPhaseComponent,
    GameGenerationComponent,
    CardCreationDialogComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  providers: [],
  entryComponents: [
    CardCreationDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
