import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public name;
  public id;
  public department ;

  constructor(private route: ActivatedRoute, private router: Router, private _courseService: CoursesService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.department = this._courseService.getSingleCourse(id);
    this.name = this.department.name;
    this.id = this.department.id;
  }

  back(){
    this.router.navigate(['/departments'])
  }

  update(){
    console.log(this.name)
    this._courseService.updateCourse(this.id, this.name)
  }

}
