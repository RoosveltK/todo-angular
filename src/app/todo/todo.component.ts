import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // completeToDos: Observable<Array<ToDo>>;

  // incompleteToDos: Observable<Array<ToDo>>;

  // private _toDo: Partial<ToDo>;

  // constructor(private store: Store<State>) { }

  ngOnInit() {
    // generateToDos().forEach(todo => this.store.dispatch(new AddToDo(todo)));
    // this.completeToDos = this.store.pipe(select(completeToDos));
    // this.incompleteToDos = this.store.pipe(select(incompleteToDos));
  }

  addToDo() {}

  onAddToDoChange(toDo: any) {
    // this._toDo = toDo;
  }

  // onCompleteToDo(toDo: ToDo) {
  //   this.store.dispatch(new CompleteToDo(toDo));
  // }

  // onIncompleteToDo(toDo: ToDo) {
  //   this.store.dispatch(new IncompleteToDo(toDo));
  // }
}
