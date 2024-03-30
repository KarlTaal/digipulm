import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'wedding-time-until',
  standalone: true,
  imports: [],
  templateUrl: './time-until.component.html',
  styleUrl: './time-until.component.scss',
})
export class TimeUntilComponent implements OnInit, OnDestroy {

  private countDownTo: Date = new Date(2024, 7, 2, 15, 0);

  protected countDownValue!: string;
  private interval!: NodeJS.Timeout;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit(): void {
    this.updateCountDownValue();
    if (isPlatformBrowser(this.platformId)) {
      this.interval = setInterval(() => this.updateCountDownValue(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private updateCountDownValue() {
    const secondsFromCurrentTimeToEnd = Math.max(0, (this.countDownTo.getTime() - new Date().getTime()) / 1000);
    const days = Math.floor(secondsFromCurrentTimeToEnd / 3600 / 24);
    const hours = Math.floor(secondsFromCurrentTimeToEnd / 3600 - days * 24);
    const minutes = Math.floor((secondsFromCurrentTimeToEnd - (hours * 3600 + days * 3600 * 24)) / 60);
    const seconds = Math.floor(secondsFromCurrentTimeToEnd - (days * 24 * 3600) - (hours * 3600) - (minutes * 60));
    this.countDownValue = `${ days.toString().padStart(2, '0') }:${ hours.toString().padStart(2, '0') }:${ minutes.toString().padStart(2, '0') }:${ seconds.toString().padStart(2, '0') }`;
  }
}
