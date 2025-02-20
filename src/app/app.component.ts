import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from "./services/data.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
