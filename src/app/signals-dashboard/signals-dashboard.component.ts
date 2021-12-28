import { Component, OnInit } from '@angular/core';
import { WeeklyZigZagSignalService } from '../service/restServices/weekly-zig-zag-signal.service';

@Component({
  selector: 'app-signals-dashboard',
  templateUrl: './signals-dashboard.component.html',
  styleUrls: ['./signals-dashboard.component.scss'],
})
export class SignalsDashboardComponent implements OnInit {
  constructor(private weeklyZigZagSignalService: WeeklyZigZagSignalService) {}

  ngOnInit(): void {
    this.weeklyZigZagSignalService.getPublishedZigzagSignals().subscribe();
  }
}
