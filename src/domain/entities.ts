import { generateUUID } from '../app/utils/uuid';

export class Todo {
  // tslint:disable-next-line:variable-name
  _id: string;
  title: string;
  createAt: number;
  listUUID: string;
  desc: string;
  completedFlag: boolean;
  completedAt: number;
  dueAt: number;
  planAt: number;
  notifyMe = false;

  constructor(title: string, listUUID?: string) {
    this._id = generateUUID();
    this.title = title;
    this.listUUID = listUUID;
    this.completedFlag = false;
  }
}

export class List {
  // tslint:disable-next-line:variable-name
  _id: string;
  title: string;
  createdAt: number;
  constructor(title: string) {
    this._id = generateUUID();
    this.title = title;
  }
}
