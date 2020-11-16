import { Dragble } from './components/animated/dragble';
import { Equal, Expect } from '@type-challenges/utils';

//#region 

  // 选中 T类型中的 k 个键
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}

type MyReadOnly<T, K extends keyof T> = {
  readonly [k in K]: T[k];
}
// type Todo = {
//   title: string;
//   desc: string;
//   footer: string;
// }
// type SubTodo = MyPick<Todo, 'title' | 'desc'>
// const todoList: SubTodo = {
//   title: '1',
//   desc: '1',
// }

//#endregion

// 求数组长度
//#region 
// type Length<T extends any[]> = T['length'];
// type tesla = ['a', 'b', 'c'];
// const teslaLength: Length<tesla> = 4
//#endregion

// 数组第一个
//#region 
// type First<T extends any[]> = T[0];
// type tesla = ['a', 'b', 'c'];
// const first: First<tesla> = 'a'
//#endregion

// 实现内置的Exclude

type MyExclude<T, U>  = T extends U ? never : T;


