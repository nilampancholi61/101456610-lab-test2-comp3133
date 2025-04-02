// missiondetails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.spaceXService.getLaunches().subscribe(data => {
      this.mission = data.find((launch: any) => launch.id === id);
    });
  }
}
