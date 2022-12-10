import { Component } from "@angular/core";

export interface NavRoute {
  path: string;
  title: string;
}

@Component({
  selector: 'app-manager-nav',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.scss']
})
export class ManagerNavComponent {
  m_Routes: NavRoute[] = [
    {
      path: 'feedback',
      title: 'Feedback'
    },
    {
      path: 'bb-register',
      title: 'Blood bank register'
    },
    {
      path: 'bb-news',
      title: 'Blood bank news'
    },
    {
      path: 'blood-req',
      title: 'Blood Requests'
    },
    {
      path: 'eq-tender',
      title: 'Equipment Tenders'
    },
    {
      path: 'monthly-blood-supply',
      title: 'Monthly blood supply'
    }
  ];

  constructor() { }
}