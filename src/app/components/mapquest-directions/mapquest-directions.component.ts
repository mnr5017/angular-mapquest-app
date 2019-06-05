import { Component, OnInit } from '@angular/core';
import { Step } from '../../step';
import { MapquestService } from '../../services/mapquest.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mapquest-directions',
  templateUrl: './mapquest-directions.component.html',
  styleUrls: ['./mapquest-directions.component.css']
})
export class MapquestDirectionsComponent implements OnInit {

  start: string = 'Boston, MA';
  end: string = 'Cambridge, MA';
  
  directions$: Observable<{steps:Step[], time: number, distance: number}>
  constructor(private mapquestService: MapquestService) { }

  search(){
  	this.directions$ = this.mapquestService.getDirections(this.start, this.end)
  }

  ngOnInit() {
  	this.search()
  }

}
