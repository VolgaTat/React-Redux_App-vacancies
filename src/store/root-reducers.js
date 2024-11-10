import { combineReducers } from "redux"
import {reducerVacancies} from "../store/pinVacancies/vacancies-reducers"
import {filtersReducers} from "../store/filters/filters-reducers"
export const rootReducers = combineReducers({
  vacancies: reducerVacancies,
  filters: filtersReducers
})