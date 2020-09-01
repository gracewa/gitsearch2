import { Component, OnInit } from '@angular/core';
import { GracewaService } from '../gracewa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile:any;

  constructor(private gracewaService: GracewaService) { 
    this.gracewaService.getGracewa().subscribe(profile => {console.log(profile);
    this.profile=profile;
    } );
  }

  ngOnInit() {
   
  }

}