import type { TodoId, TodoIdCompleted, Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: TodoIdCompleted) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className="view">
      <input id={id} type="checkbox" checked={completed} className="toggle" onChange={handleChangeCheckbox} />
      <label htmlFor={id}>{title}</label>
      <button className="destroy" onClick={() => { onRemoveTodo({ id }) }} title="Delete" />
    </div>
  )
}
