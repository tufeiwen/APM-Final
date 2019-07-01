import { NgModule } from '@angular/core'; // import module for define the module
import { CommonModule } from '@angular/common'; //import module for use by its own component
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms'; // import modules for re-export

@NgModule({
  imports: [
    CommonModule //dependent
  ],
  declarations: [
    StarComponent  //declare 
  ],
  exports: [
    StarComponent, //share
    CommonModule, //re-export
    FormsModule
  ]
})
export class SharedModule { }
