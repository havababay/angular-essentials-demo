import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message : string) : void {
    let now = new Date();
    console.log(now.toLocaleString() + ": " + message);      
  }
}
