import { FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
          return (
            <li key={literal}>
              <a className={`${filterSelected === key && 'selected'}`} href={href}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
