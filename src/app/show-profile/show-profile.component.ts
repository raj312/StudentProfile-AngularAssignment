import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationService } from '../course-information.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  constructor( private courseInfo: CourseInformationService) { }

  studentData: any;

  ngOnInit() {
    this.courseInfo.getStudentAndCourseInfo().subscribe(
      res => {
        this.studentData = res;
      },
      (err) => console.log("err loading data"),
      () => console.log("completed")
    );
    console.log(this.studentData);

  }


}
