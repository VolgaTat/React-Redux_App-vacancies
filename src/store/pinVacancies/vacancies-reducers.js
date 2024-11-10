import { ADD_VACANCIES } from "./vacancies-actions"

export const reducerVacancies = (state = [], action)=>{
  switch(action.type){
    case ADD_VACANCIES:{
     return state = action.vacancies
    }
    default:
      return state;
  }
} 