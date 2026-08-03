import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlimentoSaudaveis } from './alimento-saudaveis/alimento-saudaveis'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlimentoSaudaveis],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('alimentoSaudaveis');
}
