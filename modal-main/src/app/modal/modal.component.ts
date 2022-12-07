
import { Component} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{

  mostrar: boolean = false;
  modal(){
    this.mostrar = !this.mostrar;
  }

  
  mostrar2: boolean = false;
  modal2(){
    this.mostrar2 = !this.mostrar2;
  }

}
