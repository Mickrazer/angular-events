import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../service/base.service";
import {EventInterface} from "../../interface/event.interface";
import {UsersInterface} from "../../interface/users.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isBase = true;
  public popupOpen= false;
  public settingsOpen = false;
  public eventsData:EventInterface[] = [];
  public usersData: UsersInterface[] = [];
  constructor(private mainService: BaseService) {
    this.mainService.schedule.subscribe(value => this.popupOpen = value);
  }

  ngOnInit(): void {
    this.mainService.getData().subscribe((data) => this.eventsData = data )
    this.mainService.getUsers().subscribe((data) => this.usersData = data )
    this.mainService.schedule.subscribe((data)=> this.popupOpen = data);
  }

  toggleBase() {
    this.isBase = !this.isBase
  }
  togglePopupOpen(){
    this.popupOpen = !this.popupOpen
    this.mainService.schedule.next(this.popupOpen)
  }

  toggleSettings(){
    this.settingsOpen = !this.settingsOpen;
  }
}
