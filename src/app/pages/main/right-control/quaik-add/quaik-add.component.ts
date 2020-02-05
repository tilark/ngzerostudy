import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quaik-add',
  templateUrl: './quaik-add.component.html',
  styleUrls: ['./quaik-add.component.less']
})
export class QuaikAddComponent implements OnInit {
  @Output() add = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addTodo(title: string) {
    if (title) {
      this.add.next(title);
    }
  }
}
