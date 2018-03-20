import { Component } from '@angular/core';
import { CourseInformationService } from './course-information.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms/'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raj Patel - Assignment 2';

  data: any;
  
  showprofile: boolean = false;
  showCourseInformation: boolean = false;

  selectedCourse: any;

  constructor(public courseinfo: CourseInformationService){}

  getData(){
    this.courseinfo.getStudentAndCourseInfo().subscribe(
      res => {
        this.data = res;
      },
      (err) => console.log("err loading data"),
      () => console.log("completed")
    );
    console.log(this.data);
  }

  ngOnInit(){
    this.getData();
  }

  showProfileInfo() {
    //toggle
    if(this.showprofile){
      this.showprofile = false;
    }else{
      this.showprofile = true;
    }
  }

  //on course change from dropdown
  onCourseChange(scourse){
   console.log(scourse.cCode);
    this.showCourseInformation = true;
    this.selectedCourse = scourse;
  // console.log(this.selectedCourse.cSection);
  }



}
