import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title = "Top Courses";
  public courses;
  constructor(private _courseService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.courses = this._courseService.getCourses()
  }

  onSelect(course){
    console.log(course)
    this.router.navigate(['/departments', course.id])
  }

}
