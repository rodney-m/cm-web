import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'instapay-client-portal-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{

  isCollapsed = false;
  @Output() title = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  getTitle(data:any){
    console.log(data.target.innerText)
    this.title.emit(data.target.innerText)
  }
}
