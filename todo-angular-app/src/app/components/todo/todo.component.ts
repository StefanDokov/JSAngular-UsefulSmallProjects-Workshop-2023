import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string = "";

  constructor() {

  }

  ngOnInit(): void {
      this.todos = [
        {
          content: 'first content',
          completed: false
        },
        {
          content: 'second content',
          completed: false
        },
        {
          content: 'third content',
          completed: false
        },
        {
          content: 'fourth content',
          completed: false
        }
      ]
  }

  toggleDone(id: number): void {
     this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
     })
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos = [...this.todos, {content: this.inputTodo, completed: false}];
    this.inputTodo = "";
  }
 }
