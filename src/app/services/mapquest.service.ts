import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Step } from '../step';


import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const API_KEY = 'c4SAh5CD74pjwy2AgdDXG6iEZtE67YHp';
const url = 'http://open.mapquestapi.com/directions/v2/route';

@Injectable()
export class MapquestService {

  constructor(private http: HttpClient) { }

  //methods are just functions attached to objects
  getDirections(start: string, end: string): Observable<{steps:Step[], time: number, distance: number}> {
  	return this.http.get(url, {params:{key: API_KEY, from: start, to: end}})
  		.map(res => {
  			let json = res as {route:{distance: number, time: number, 
  				legs: Array<{maneuvers: Array<{iconUrl: string, narrative: string, mapUrl: string, distance: number}>}>}}
  			let distance = json.route.distance
  			let time = json.route.time
  			let steps = json.route.legs[0].maneuvers.map(step => {
  				return {
  					imgUrl: step.iconUrl, 
  					text: step.narrative,
  					stepUrl: step.mapUrl,
  					distance: step.distance
  				}
  			})
  			return {distance, time, steps}
  		})
  }
}
