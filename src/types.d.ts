import type { TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

// Another way to achieve the same result

// Create a type for a list
// export type ListOfTodos = Todo[]

// Create a interfaces for the list
// export interface Props {
//   todos: ListOfTodos
// }

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoIdCompleted = Omit<Todo, 'title'>
export type TodoCompleted = Omit<Todo, 'id' | 'title' >

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
