import { DetailService } from './detail.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'software';
  person =[];
  
  constructor(private _detail : DetailService){}
  ngOnInit()
  {
    this._detail.getData().subscribe(data=>this.person=data);
  }
}