
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {

  @Output() filterYear: EventEmitter<number> = new EventEmitter<number>();
  year: number | undefined;

  onFilter() {
    this.filterYear.emit(this.year);
  }
}
