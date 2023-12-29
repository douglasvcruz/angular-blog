import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss',
})
export class BigCardComponent implements OnInit {
  @Input()
  id: string = '0';
  @Input()
  photoCover: string =
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';
  @Input()
  title: string = 'Testando o componente Big Card';
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quasiipsum commodi';

  constructor() {}

  ngOnInit(): void {}
}
