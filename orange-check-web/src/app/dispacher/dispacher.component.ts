import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispacher',
  templateUrl: './dispacher.component.html',
  styleUrls: ['./dispacher.component.scss']
})
export class DispacherComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    // Temporary...
    this.router.navigate(['app']);
  }

}
