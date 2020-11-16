import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {

  }
  ngAfterViewInit(): void {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {

  }
}
