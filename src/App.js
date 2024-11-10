import './index.css';
import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import data from "./mock/data.json";
import {addVacanciesAction} from "./store/pinVacancies/vacancies-actions"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addVacanciesAction(data))
  },[dispatch])
  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
