import { Component, OnInit } from '@angular/core';
import {Pasatiempo} from "./pasatiempo";
import {PasatiempoService} from "./pasatiempo.service";

@Component({
  selector: 'app-pasatiempo',
  templateUrl: './pasatiempo.component.html',
  styleUrls: ['./pasatiempo.component.css'],
})
export class PasatiempoComponent implements OnInit {

  habilitar: boolean = true;
  pasatiempos: Pasatiempo[];

  constructor(private pasatiempoService: PasatiempoService) {
  }

  ngOnInit(): void {
    this.pasatiempoService.getPasatiempo().subscribe(
      (pasatiempos) =>{
        this.pasatiempos = pasatiempos;
      }
    )
  }

  setHabilitar() {
    this.habilitar = this.habilitar == true ? false : true;
  }
}
