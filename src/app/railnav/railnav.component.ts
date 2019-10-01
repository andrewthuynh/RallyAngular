import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-railnav',
  templateUrl: './railnav.component.html',
  styleUrls: ['./railnav.component.scss']
})
export class RailnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  railNav(tab){
    this.router.navigateByUrl(tab);
  }

}
