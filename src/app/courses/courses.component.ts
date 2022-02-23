import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
// property binding
  // title = "List of the courses";
  imageUrl = "https://lorempixel.com/400/200";

  //attribute binding
 // colSpan = 2;
  
  //function binding
   isActive = true;

  // style binding

  //event binding
  // onSave($event: any) {
  //   //  $event.stopPropagation(); to stop the event bubbling
  //   console.log("btn was clicked",$event)
    
  // }

  // ondivClicked() {
  //   console.log("div is clicked")
  // }

  // event filter
  // onKeyUp() {
  //   // if ($event.keyCode === 13) console.log("enter was clicked");
  //   console.log("enter was clicked");

    
  // }

  //template variable
  // onKeyUp(name:any) {
  //   console.log(name)
  // }

  // two way binding
  name = "suman.com";
  onKeyUp() {
    console.log(this.name)
  }
}
