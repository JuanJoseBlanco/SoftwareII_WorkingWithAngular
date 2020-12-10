import { Injectable } from '@angular/core';
import {PASATIEMPOS} from "./pasatiempos.json";
import {Pasatiempo} from "./pasatiempo";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PasatiempoService {    
  constructor() {    
    
  }

  getPasatiempo():Observable <Pasatiempo[]>{
    return of(PASATIEMPOS);
  }
}
