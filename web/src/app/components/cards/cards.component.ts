import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  data: Observable<{ [key: string]: any }[]> = this.activatedRoute.data.pipe(map(r => r.data));

  constructor(public activatedRoute: ActivatedRoute) { }

}
