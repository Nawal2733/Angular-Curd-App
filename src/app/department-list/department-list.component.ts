import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public isDisplay = 'hide';
  public departments = [];

  constructor(private router: Router, private _courseServices: CoursesService) { }

  ngOnInit(): void {
    this.departments = this._courseServices.getCourses();
  }

  onSelect(department) {
    // console.log(department);
    this.router.navigate(['/departments', department.id])
  }

  save(courseName) {
    console.log(courseName)
    if (courseName.length >= 1) {
      this.isDisplay = 'hide'
      this._courseServices.saveCourse(courseName)
    }else{
      this.isDisplay = 'danger'
    }
  }

  delete(id){
    console.log(id)
    this._courseServices.delete(id)
  }

  back() {
    this.router.navigate(['/dashboard'])
  }

}
