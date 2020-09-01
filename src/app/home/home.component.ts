import { Component, OnInit } from '@angular/core';
import { GracewaService } from '../gracewa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;

  constructor(private gracewaService: GracewaService) { }

  ngOnInit() {
    this.data = this.gracewaService.getGracewa();
    console.log(this.data)
  }

}