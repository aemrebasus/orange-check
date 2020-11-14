import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  data = [{ id: 1 }, { id: 2 }];

  constructor(public activatedRoute: ActivatedRoute) { }

}
