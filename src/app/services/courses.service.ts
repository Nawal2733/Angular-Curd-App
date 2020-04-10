import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  data = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Nodejs" },
    { id: 3, name: "MongoDB" },
  ]

  constructor() { }

  getCourses(){
    return this.data;
  }

  getSingleCourse(id){
    return this.data.find(item => item.id === id);
  }

  saveCourse(name){
    const id = this.data[this.data.length - 1].id + 1
    this.data.push({id: id, name: name})
  }

  updateCourse(id, name){
    let singleData = this.data.find(d => d.id === id);
    singleData.name = name
  }

  delete(id){
    let index = this.data.findIndex(d => d.id === id);
    this.data.splice(index, 1)
  }

}
