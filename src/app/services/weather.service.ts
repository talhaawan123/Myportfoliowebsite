import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 
      
  }
  getdata( city:string, units: string ){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=8806b6b8c2df3a99da822c99e55a5db8&units='+units)
 }
}
