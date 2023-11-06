import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './dataVehiculos';
import { VehiculoService } from './vehiculo.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  total1: number = 0;
  total2: number =0;
  total3: number = 0;
  
  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo>=[];

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
      for (let i of this.vehiculos){
        if (i.marca=='Nissan'){
          this.total1 = this.total1+1
        }
        if (i.marca=='Renault'){
          this.total2 = this.total2+1
        }
        if (i.marca=='Chevrolet'){
          this.total3 = this.total3+1
        }
        
      }

    });
  }
 
   
  

  ngOnInit() {
    this.getVehiculos();
  
      
    
  }

}
