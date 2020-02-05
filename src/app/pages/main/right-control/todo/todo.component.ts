import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Todo, List } from 'src/domain/entities';
import { ListService } from 'src/app/services/list/list.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { takeUntil } from 'rxjs/operators';
import { floorToDate, getTodayTime } from 'src/app/utils/time';
import { NzDropdownService, NzDropdownContextComponent } from 'ng-zorro-antd';
import { RankBy } from 'src/domain/type';

const rankderGenerator = (type: RankBy = 'title'): any => {
  if (type === 'completeFlag') {
    return (t1: Todo, t2: Todo) => t1.completedFlag && !t2.completedFlag;
  }
  return (t1: Todo, t2: Todo) => t1[type] > t2[type];
};
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit, OnDestroy {
  private dropdown: NzDropdownContextComponent;
  private destroy$ = new Subject();

  todos: Todo[] = [];
  lists: List[] = [];
  currentContextTodo: Todo;

  constructor(
    private listService: ListService,
    private todoService: TodoService,
    private dropdownService: NzDropdownService
  ) { }

  ngOnInit() {
    this.listService.lists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lists => {
        this.lists = lists;
      });

    combineLatest(this.listService.currentUuid$, this.todoService.todo$, this.todoService.rank$)
        .pipe(takeUntil(this.destroy$))
        .subscribe(sources => {
          this.processTodos(sources[0], sources[1], sources[2]);
        });
    this.todoService.getAll();
    this.listService.getAll();
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  private processTodos(listUUID: string, todos: Todo[], rank: RankBy): void {
    const filteredTodos = todos
        .filter(todo => {
          return ((listUUID === 'today' && todo.planAt && floorToDate(todo.planAt) <= getTodayTime())
            || listUUID === 'todo' && (!todo.listUUID || todo.listUUID === 'todo')
            || (listUUID === todo.listUUID));
        })
        .map(todo => Object.assign({}, todo) as Todo)
        .sort(rankderGenerator(rank));
    this.todos = [].concat(filteredTodos);
  }

  add(title: string): void {
    this.todoService.add(title);
  }

  contextMenu(
    $event: MouseEvent,
    template: TemplateRef<void>,
    uuid: string
  ): void {
    this.dropdown = this.dropdownService.create($event, template);
    this.currentContextTodo = this.todos.find(t => t._id === uuid);
  }

  listsExcept(listUUID: string): List[] {
    return this.lists.filter(l => l._id !== listUUID);
  }

  toggle(uuid: string): void {
    this.todoService.toggleTodoComplete(uuid);
  }

  delete(): void {
    this.todoService.delete(this.currentContextTodo._id);
  }

  setToday(): void {
    this.todoService.setTodoToday(this.currentContextTodo._id);
  }
  moveToList(listUUID: string): void {
    this.todoService.moveToList(this.currentContextTodo._id, listUUID);
  }

  close(): void {
    this.dropdown.close();
  }
}
