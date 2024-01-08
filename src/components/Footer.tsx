import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: () => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, filterSelected, handleFilterChange, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

      {
        completedCount > 0 && (
          <button type="button" className="clear-completed" onClick={onClearCompleted}>Clear completed tasks</button>
        )
      }

    </footer>
  )
}
