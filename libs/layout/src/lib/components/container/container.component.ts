import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'instapay-client-portal-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  title = '';
  isCollapsed = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getTitle()

  }

  getTitle(){
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.title = "InstaPay Client Portal";
      }
    });

  }
}
