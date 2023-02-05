import { Component, Input } from '@angular/core';
import { AlbumDetails, CategorySingleObject, SliderDetails } from 'src/app/lib/models/models';

@Component({
  selector: 'app-category-item',
  templateUrl: './categoryitem.component.html',
  styleUrls: ['./categoryitem.component.css']
})
export class CategoryitemComponent {

  
  //@ts-ignore
  @Input() details: CategorySingleObject = null;
  
  

}



