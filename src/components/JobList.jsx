// import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from 'react-redux';
import {sortPosVacancies} from "../store/pinVacancies/vacancies-selector";
import {addFilters} from "../store/filters/filters-actions"
import {selectorFilters} from "../store/filters/filters-selectos"
const JobList = () => {
  // const allVacancies = useSelector(selectorVacancies)
  const dispatch = useDispatch();
  function hanglFilterClick (filters){
    dispatch(addFilters(filters))
  }
  /*sortPositionVacancies */
  const currentFilter = useSelector(selectorFilters)
  const allVacancies = useSelector(state => sortPosVacancies(state, currentFilter))
  return (
    <div className='job-list'>
      {allVacancies.map(item => (
        <JobPosition key = {item.id} {...item} hanglFilterClick = {hanglFilterClick}/>
      ))}
    </div>
  )
}

export {JobList};