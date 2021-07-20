import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public plan = false;
  constructor(private headerService: BaseService) {

  }

  ngOnInit(): void {
    this.headerService.schedule.subscribe((data)=> this.plan = data);
  }
  togglePlan(){
    this.plan = !this.plan
    this.headerService.schedule.next(this.plan)
  }

}
