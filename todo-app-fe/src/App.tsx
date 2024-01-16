import { useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoIdCompleted, TodoId, TodoTitle, FilterValue } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: crypto.randomUUID(),
    title: 'Practice with react and typeScript',
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: 'Continue with 30 days of code',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Evolve as a fullstack',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: TodoIdCompleted): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToggleCompleted={handleCompleted} />
      <Footer activeCount={activeCount} completedCount={completedCount} filterSelected={filterSelected} onClearCompleted={handleRemoveAllCompleted} handleFilterChange={handleFilterChange} />
    </div>
  )
}

export default App
