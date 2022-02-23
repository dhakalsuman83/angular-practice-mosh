import { Component } from '@angular/core';
import { ActiveChangedArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: "...",
    likesCount:10,
    isLiked:true
    
  }
  // post = {
  //   title: "Title",
  //   isActive:true
  // }

  // onActiveChanged(eventArgs:ActiveChangedArgs) {
  //   console.log("active changed",eventArgs)
  // }
}
