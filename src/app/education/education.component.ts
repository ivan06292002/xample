import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  //Property Binding
  college: String = 'Bachelor of Web Development';
  shs: String = 'Senior High School - STEM';
}
