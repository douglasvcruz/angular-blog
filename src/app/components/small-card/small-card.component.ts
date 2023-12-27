import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
  @Input()
  title: string = "Texto padrão para teste";

  constructor() {}

  ngOnInit() {}
}
