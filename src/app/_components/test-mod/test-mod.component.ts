import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-test-mod',
  templateUrl: './test-mod.component.html',
  styleUrls: ['./test-mod.component.css']
})
export class TestModComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  showSolution() {
    //Send Request to DB, load standart Solution, currently not working
    document.getElementById("solution_container").innerHTML='<object type ="img" data=""></object>';
  }

}
