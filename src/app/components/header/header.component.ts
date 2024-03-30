import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'wedding-header',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(protected configService: ConfigService) {
  }
}
