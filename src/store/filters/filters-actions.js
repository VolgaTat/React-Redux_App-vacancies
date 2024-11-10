export const ADD_FILTERS = "ADD_FILTERS";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const addFilters = (filters)=>({
  type: ADD_FILTERS,
  filters,
})
export const removeFilters = (filters)=>({
  type: REMOVE_FILTERS,
  filters,
})
export const clearFilters = ()=>({
  type: CLEAR_FILTERS,
})
