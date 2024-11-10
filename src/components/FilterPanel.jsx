import { useSelector, useDispatch} from 'react-redux';
import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';
import {selectorFilters} from "../store/filters/filters-selectos"
import {clearFilters,removeFilters} from "../store/filters/filters-actions"
const FilterPanel = () => {
  const dispatch = useDispatch()
  const selectorAllFilters = useSelector(selectorFilters)
  if(selectorAllFilters.length === 0){
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
        {selectorAllFilters.map(filter => 
          <Badge  key = {filter} variant="clearable"
          onClick={()=> dispatch(removeFilters(filter))}>
            {filter}
          </Badge>)}
        </Stack>
        <button 
            onClick ={()=> dispatch(clearFilters())} className='link'
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};