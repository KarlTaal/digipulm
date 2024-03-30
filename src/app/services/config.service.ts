import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  readonly weddingStartTime: Date = new Date(2024, 7, 2, 15, 0);

}
