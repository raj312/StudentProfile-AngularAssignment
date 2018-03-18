import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseInformationService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/CourseInfo.json';

  getStudentAndCourseInfo(){
    return this.http.get(this.configUrl);
  }

}
