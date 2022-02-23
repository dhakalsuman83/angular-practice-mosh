import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent{
  // courses = []
  // viewMode = 'list';
  courses = [
    { id: 1, name: "suman" },
    {id:2, name:"dhakal"}
  ]

  addCourse() {
    this.courses.push({id:4,name:"sunita"})
  }

  removeCourse(course:any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1)
  }
}
