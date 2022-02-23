import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
  @Input('is-active') isActive?: boolean;
  @Output('change') click = new EventEmitter();
   
  onClick() {
    this.isActive = !this.isActive;
    this.click.emit({newValue:this.isActive});
  }
}

export interface ActiveChangedArgs {
newValue: boolean;
}


