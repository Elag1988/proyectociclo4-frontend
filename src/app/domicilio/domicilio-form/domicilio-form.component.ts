

import { Component, OnInit } from '@angular/core';
import { IDomicilio } from '../interfaces/domicilio.interface';
import { DomicilioService } from '../service/domicilio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domicilio-form',
  templateUrl: './domicilio-form.component.html',
  styleUrls: ['./domicilio-form.component.css']
})
export class DomicilioFormComponent implements OnInit {

  domicilioList: IDomicilio[] = [];

  domicilio: IDomicilio = {
    
    cliente: "",
    direccion: "",
    estadoPedido: "Por responder"
  }

  edit:boolean = false;

  constructor(
    private readonly domicilioService: DomicilioService,
    private readonly router:Router,
    private readonly activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params =this.activateRoute.snapshot.params;
      if(params['id'] != undefined) {
        this.domicilioService.getDomiciliosById(params['id'])
        .subscribe(
          res => {
            this.domicilio = res;
            this.edit = true;
          }
        );
      }
  }

  getDomicilios() {
    this.domicilioService.getDomicilios().subscribe(
      data => this.domicilioList = data
    );
  }

  deleteDomicilio(productId:number) {

    this.domicilioService.deleteDomicilio(productId).subscribe (
      
      res =>{
        this.getDomicilios();
        console.log(res);
      },
      err => console.log(err)
    );

  }

  createDomicilio() {
    this.domicilioService.createDomicilio(this.domicilio). subscribe (
      res => {
        console.log(res);
        this.getDomicilios();
        
      },
      err => console.log(err) 
    );
  }

  updateDomicilio() {
    this.domicilioService.updateDomicilio( this.domicilio.idDomicilio! ,this.domicilio). subscribe (
      res => {
        console.log(res);
        this.router.navigate(["domicilio/list"]);
      },
      err => console.log(err) 
    );
  }

}
