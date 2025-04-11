import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp01Component} from 'test01';
import { emg01 } from './layouts/grid/emg/emg-01/emg-01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Comp01Component,emg01],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngpro_01';
}
