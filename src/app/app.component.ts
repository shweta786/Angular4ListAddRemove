import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = ["angular4", "java script", "java"];
  newItem = "";
  pushItem = function() {
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  removeItem = function(ind) {
    this.items.splice(ind,1);
  }

}
