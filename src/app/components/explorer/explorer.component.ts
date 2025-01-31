import { Component } from '@angular/core';
import { FILES } from '../../constants/app.constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorer',
  imports: [RouterModule],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {
  files = FILES;
}
