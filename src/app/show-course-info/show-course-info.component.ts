import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-course-info',
  templateUrl: './show-course-info.component.html',
  styleUrls: ['./show-course-info.component.css']
})
export class ShowCourseInfoComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() selectedCourse;

  ngOnInit() {
//    console.log(this.selectedCourse.cCredit);
  }

  // to listen to changes in the property for selectedCourse
  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'selectedCourse') {
          this.selectedCourse = changes[property].currentValue;
//         console.log(this.selectedCourse.cCredit);
        } 
    }
  }


}
