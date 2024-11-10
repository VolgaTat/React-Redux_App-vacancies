import { ADD_FILTERS, REMOVE_FILTERS, CLEAR_FILTERS } from "./filters-actions"

export const filtersReducers = (state = [], action)=>{
  switch(action.type){
    case ADD_FILTERS:{
      return [...state, action.filters ]
    }
    case REMOVE_FILTERS:{
      return state.filter(item => item !== action.filters )
    }
    case CLEAR_FILTERS:{
      return [];
    }
    default:
      return state
  }
}